import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RestaurantCategoriesService } from './restaurant-categories.service';
import { CreateRestaurantCategoryDto } from './dto/create-restaurant-category.dto';
import { UpdateRestaurantCategoryDto } from './dto/update-restaurant-category.dto';

@Controller('categories')
export class RestaurantCategoriesController {
  constructor(private readonly categoriesService: RestaurantCategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateRestaurantCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateRestaurantCategoryDto,
  ) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
