import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToppingCategoryDto } from './dto/create-topping-category.dto';
import { UpdateToppingCategoryDto } from './dto/update-topping-category.dto';
import { ToppingCategory } from './entities/topping-category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ToppingCategoriesService {
  constructor(
    @InjectRepository(ToppingCategory)
    private readonly toppingCategoryRepository: Repository<ToppingCategory>,
  ) {}

  async create(createToppingCategoryDto: CreateToppingCategoryDto) {
    const category = this.toppingCategoryRepository.create(
      createToppingCategoryDto,
    );
    await this.toppingCategoryRepository.save(category);
    return category;
  }

  findAll() {
    return `This action returns all toppingCategories`;
  }

  async findOne(id: number) {
    const toppingCategory = await this.toppingCategoryRepository.findOneBy({
      id,
    });
    if (!toppingCategory) {
      throw new NotFoundException(`Topping Category ${id} not found`);
    }
    return toppingCategory;
  }

  update(id: number, updateToppingCategoryDto: UpdateToppingCategoryDto) {
    return `This action updates a #${id} toppingCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} toppingCategory`;
  }
}
