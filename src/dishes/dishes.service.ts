import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { In, Repository } from 'typeorm';
import { DishCategoriesService } from 'src/dish-categories/dish-categories.service';
import { DishCategory } from 'src/dish-categories/entities/dish-category.entity';
import { Topping } from 'src/toppings/entities/topping.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
    private dishCategoriesService: DishCategoriesService,
    @InjectRepository(Topping)
    private readonly toppingRepository: Repository<Topping>,
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
    const dishes: Dish[] = await this.dishRepository.find();
    return dishes;
  }

  async detail(id: number) {
    const dish = await this.dishRepository.findOne({
      where: { id },
      relations: {
        toppings: {
          toppingCategory: true,
        },
        dishCategory: {
          restaurant: true,
        },
      },
    });
    if (!dish) {
      throw new NotFoundException(`Dish ${id} not found`);
    }

    let toppingCategories = [];

    dish.toppings.forEach((topping) => {
      const toppingCategory = topping.toppingCategory;
      delete topping.toppingCategory;
      const toppingCategoryIndex: number = toppingCategories.findIndex(
        (t) => t.id == toppingCategory.id,
      );
      delete topping.createdAt;
      delete topping.updatedAt;
      delete toppingCategory.createdAt;
      delete toppingCategory.updatedAt;
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

    delete dish.toppings;
    delete dish.createdAt;
    delete dish.updatedAt;
    return {
      ...dish,
      toppingCategories: toppingCategories,
    };
  }

  async findOne(id: number) {
    return await this.dishRepository.findOne({
      where: { id },
    });
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
