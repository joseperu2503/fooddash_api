import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantCategoryDto } from './dto/create-restaurant-category.dto';
import { UpdateRestaurantCategoryDto } from './dto/update-restaurant-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantCategory } from './entities/restaurant-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantCategoriesService {
  constructor(
    @InjectRepository(RestaurantCategory)
    private readonly categoryRepository: Repository<RestaurantCategory>,
  ) {}

  async create(createCategoryDto: CreateRestaurantCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(category);
    return category;
  }

  async findAll() {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateRestaurantCategoryDto) {
    const category = await this.findOne(id);
    this.categoryRepository.merge(category, updateCategoryDto);
    return this.categoryRepository.save(category);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
