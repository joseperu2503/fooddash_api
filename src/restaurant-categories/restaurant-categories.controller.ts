import { Controller, Get } from '@nestjs/common';
import { RestaurantCategoriesService } from './restaurant-categories.service';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller('restaurant-categories')
@ApiExcludeController()
export class RestaurantCategoriesController {
  constructor(
    private readonly categoriesService: RestaurantCategoriesService,
  ) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
}
