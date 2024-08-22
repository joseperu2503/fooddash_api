import { Controller, Get } from '@nestjs/common';
import { RestaurantCategoriesService } from './restaurant-categories.service';

@Controller('restaurant-categories')
export class RestaurantCategoriesController {
  constructor(
    private readonly categoriesService: RestaurantCategoriesService,
  ) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
}
