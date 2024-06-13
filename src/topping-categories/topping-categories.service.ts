import { Injectable } from '@nestjs/common';
import { CreateToppingCategoryDto } from './dto/create-topping-category.dto';
import { UpdateToppingCategoryDto } from './dto/update-topping-category.dto';

@Injectable()
export class ToppingCategoriesService {
  create(createToppingCategoryDto: CreateToppingCategoryDto) {
    return 'This action adds a new toppingCategory';
  }

  findAll() {
    return `This action returns all toppingCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toppingCategory`;
  }

  update(id: number, updateToppingCategoryDto: UpdateToppingCategoryDto) {
    return `This action updates a #${id} toppingCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} toppingCategory`;
  }
}
