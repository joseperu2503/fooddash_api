import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishCategoryDto } from './dto/create-dish-category.dto';
import { UpdateDishCategoryDto } from './dto/update-dish-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DishCategory } from './entities/dish-category.entity';
import { Repository } from 'typeorm';
import { RestaurantsService } from 'src/restaurants/restaurants.service';

@Injectable()
export class DishCategoriesService {
  constructor(
    @InjectRepository(DishCategory)
    private readonly categoryDishRepository: Repository<DishCategory>,
    private restaurantsService: RestaurantsService,
  ) {}

  async create(createDishCategoryDto: CreateDishCategoryDto) {
    const dishCategory = this.categoryDishRepository.create(
      createDishCategoryDto,
    );

    const restaurant = await this.restaurantsService.findOne(
      createDishCategoryDto.restaurantId,
    );

    dishCategory.restaurant = restaurant;

    await this.categoryDishRepository.save(dishCategory);
    return dishCategory;
  }

  async findAll() {
    const dishCategory = await this.categoryDishRepository.find();
    return dishCategory;
  }

  async findOne(id: number) {
    const dishCategory = await this.categoryDishRepository.findOneBy({ id });
    if (!dishCategory) {
      throw new NotFoundException(`Dish Category ${id} not found`);
    }
    return dishCategory;
  }

  async update(id: number, updateDishCategoryDto: UpdateDishCategoryDto) {
    const dishCategory = await this.findOne(id);

    if (updateDishCategoryDto.restaurantId) {
      const restaurant = await this.restaurantsService.findOne(
        updateDishCategoryDto.restaurantId,
      );

      dishCategory.restaurant = restaurant;
    }
    this.categoryDishRepository.merge(dishCategory, updateDishCategoryDto);
    return this.categoryDishRepository.save(dishCategory);
  }

  remove(id: number) {
    return this.categoryDishRepository.delete(id);
  }
}
