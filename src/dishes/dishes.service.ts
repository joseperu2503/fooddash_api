import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { Repository } from 'typeorm';
import { DishCategoriesService } from 'src/dish-categories/dish-categories.service';
import { DishCategory } from 'src/dish-categories/entities/dish-category.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly categoryDishRepository: Repository<Dish>,
    private dishCategoriesService: DishCategoriesService,
  ) {}

  async create(createDishDto: CreateDishDto) {
    const dish: Dish = this.categoryDishRepository.create(createDishDto);

    const dishCategory: DishCategory = await this.dishCategoriesService.findOne(
      createDishDto.dishCategoryId,
    );

    dish.dishCategory = dishCategory;

    await this.categoryDishRepository.save(dish);
    return dish;
  }

  async findAll() {
    const dishes: Dish[] = await this.categoryDishRepository.find();
    return dishes;
  }

  async findOne(id: number) {
    const dish = await this.categoryDishRepository.findOneBy({ id });
    if (!dish) {
      throw new NotFoundException(`Dish  ${id} not found`);
    }
    return dish;
  }

  async update(id: number, updateDishDto: UpdateDishDto) {
    const dish: Dish = await this.findOne(id);

    if (updateDishDto.dishCategoryId) {
      const dishCategory: DishCategory =
        await this.dishCategoriesService.findOne(updateDishDto.dishCategoryId);

      dish.dishCategory = dishCategory;
    }
    this.categoryDishRepository.merge(dish, updateDishDto);
    return this.categoryDishRepository.save(dish);
  }

  remove(id: number) {
    return this.categoryDishRepository.delete(id);
  }
}
