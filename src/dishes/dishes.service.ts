import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { In, Repository } from 'typeorm';
import { DishCategoriesService } from 'src/dish-categories/dish-categories.service';
import { DishCategory } from 'src/dish-categories/entities/dish-category.entity';
import { Topping } from 'src/toppings/entities/topping.entity';
import { User } from 'src/auth/entities/user.entity';
import { FavoriteDish } from 'src/favorites/entities/favorite-dish.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,

    private dishCategoriesService: DishCategoriesService,

    @InjectRepository(Topping)
    private readonly toppingRepository: Repository<Topping>,

    @InjectRepository(FavoriteDish)
    private readonly favoriteDishRepository: Repository<FavoriteDish>,
  ) {}

  async create(createDishDto: CreateDishDto) {
    const dish: Dish = this.dishRepository.create(createDishDto);

    const dishCategory: DishCategory = await this.dishCategoriesService.findOne(
      createDishDto.dishCategoryId,
    );

    dish.dishCategory = dishCategory;

    const toppings = await this.toppingRepository.findBy({
      id: In(createDishDto.toppingsIds),
    });

    dish.toppings = toppings;

    await this.dishRepository.save(dish);
    return dish;
  }

  async findAll() {
    const dishes: Dish[] = await this.dishRepository.find({
      select: {
        id: true,
        image: true,
        description: true,
        name: true,
        stock: true,
        price: true,
      },
    });
    return dishes;
  }

  async findOne(dishId: number, user?: User) {
    const dish = await this.dishRepository.findOne({
      where: { id: dishId },
      select: {
        id: true,
        image: true,
        description: true,
        name: true,
        stock: true,
        price: true,
        dishCategory: {
          id: true,
          name: true,
          restaurant: {
            id: true,
            name: true,
          },
        },
      },
      relations: {
        dishCategory: {
          restaurant: true,
        },
      },
    });

    if (!dish) {
      throw new NotFoundException(`Dish ${dishId} not found`);
    }

    let isFavorite = false;

    if (user) {
      const favoriteRestaurant = await this.favoriteDishRepository.findOne({
        where: {
          dish: {
            id: dish.id,
          },
          user: {
            id: user.id,
          },
        },
      });

      isFavorite = !!favoriteRestaurant;
    }

    return {
      ...dish,
      isFavorite: isFavorite,
    };
  }

  async toppings(dishId: number) {
    const dish = await this.dishRepository.findOne({
      where: { id: dishId },
      select: {
        toppings: {
          id: true,
          description: true,
          maxLimit: true,
          price: true,
          toppingCategory: {
            id: true,
            description: true,
            maxToppings: true,
            minToppings: true,
          },
        },
      },
      relations: {
        toppings: {
          toppingCategory: true,
        },
      },
    });

    if (!dish) {
      throw new NotFoundException(`Dish ${dishId} not found`);
    }

    let toppingCategories = [];

    dish.toppings.forEach((topping) => {
      const toppingCategory = topping.toppingCategory;
      delete topping.toppingCategory;

      const toppingCategoryIndex: number = toppingCategories.findIndex(
        (t) => t.id == toppingCategory.id,
      );

      if (toppingCategoryIndex == -1) {
        toppingCategories.push({
          ...toppingCategory,
          subtitle:
            toppingCategory.maxToppings > 1
              ? `Select maximun ${toppingCategory.maxToppings} options`
              : '',
          toppings: [topping],
        });
      } else {
        toppingCategories[toppingCategoryIndex].toppings.push(topping);
      }
    });

    return toppingCategories;
  }

  async update(id: number, updateDishDto: UpdateDishDto) {
    const dish = await this.dishRepository.findOne({
      where: { id },
    });

    if (updateDishDto.dishCategoryId) {
      const dishCategory: DishCategory =
        await this.dishCategoriesService.findOne(updateDishDto.dishCategoryId);

      dish.dishCategory = dishCategory;
    }
    this.dishRepository.merge(dish, updateDishDto);
    return this.dishRepository.save(dish);
  }

  remove(id: number) {
    return this.dishRepository.delete(id);
  }
}
