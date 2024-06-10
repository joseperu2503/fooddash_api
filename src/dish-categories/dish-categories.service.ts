import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishCategoryDto } from './dto/create-dish-category.dto';
import { UpdateDishCategoryDto } from './dto/update-dish-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DishCategory } from './entities/dish-category.entity';
import { Repository } from 'typeorm';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';

@Injectable()
export class DishCategoriesService {
  constructor(
    @InjectRepository(DishCategory)
    private readonly dishCategoryRepository: Repository<DishCategory>,
    private restaurantsService: RestaurantsService,
  ) {}

  async create(createDishCategoryDto: CreateDishCategoryDto) {
    const dishCategory: DishCategory = this.dishCategoryRepository.create(
      createDishCategoryDto,
    );

    const restaurant: Restaurant = await this.restaurantsService.findOne(
      createDishCategoryDto.restaurantId,
    );

    dishCategory.restaurant = restaurant;

    await this.dishCategoryRepository.save(dishCategory);
    return dishCategory;
  }

  async findAll() {
    const dishCategories: DishCategory[] =
      await this.dishCategoryRepository.find();
    return dishCategories;
  }

  async findOne(id: number) {
    const dishCategory: DishCategory =
      await this.dishCategoryRepository.findOneBy({ id });
    if (!dishCategory) {
      throw new NotFoundException(`Dish Category ${id} not found`);
    }
    return dishCategory;
  }

  async update(id: number, updateDishCategoryDto: UpdateDishCategoryDto) {
    const dishCategory: DishCategory = await this.findOne(id);

    if (updateDishCategoryDto.restaurantId) {
      const restaurant: Restaurant = await this.restaurantsService.findOne(
        updateDishCategoryDto.restaurantId,
      );

      dishCategory.restaurant = restaurant;
    }
    this.dishCategoryRepository.merge(dishCategory, updateDishCategoryDto);
    return this.dishCategoryRepository.save(dishCategory);
  }

  remove(id: number) {
    return this.dishCategoryRepository.delete(id);
  }
}
