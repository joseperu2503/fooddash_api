import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DishCategoriesService } from './dish-categories.service';
import { CreateDishCategoryDto } from './dto/create-dish-category.dto';
import { UpdateDishCategoryDto } from './dto/update-dish-category.dto';

@Controller('dish-categories')
export class DishCategoriesController {
  constructor(private readonly dishCategoriesService: DishCategoriesService) {}

  @Post()
  create(@Body() createDishCategoryDto: CreateDishCategoryDto) {
    return this.dishCategoriesService.create(createDishCategoryDto);
  }

  @Get()
  findAll() {
    return this.dishCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDishCategoryDto: UpdateDishCategoryDto,
  ) {
    return this.dishCategoriesService.update(+id, updateDishCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishCategoriesService.remove(+id);
  }
}
