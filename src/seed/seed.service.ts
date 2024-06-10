import { Injectable } from '@nestjs/common';
import { initialData } from './data/seed-data';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { RestaurantCategoriesService } from 'src/categories/restaurant-categories.service';
import { DataSource } from 'typeorm';
import { DishCategoriesService } from 'src/dish-categories/dish-categories.service';
import { DishesService } from 'src/dishes/dishes.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly restaurantsService: RestaurantsService,
    private readonly categoriesService: RestaurantCategoriesService,
    private readonly dishCategoriesService: DishCategoriesService,
    private readonly dishesService: DishesService,
    private readonly dataSource: DataSource,
  ) {}

  async runSeed() {
    await this.dropAllTables();
    await this.categorySeed();
    await this.restaurantSeed();
    await this.dishCategorySeed();
    await this.dishseed();

    return 'SEED EXECUTED';
  }

  private async categorySeed() {
    const categories = initialData.categories;

    for (const category of categories) {
      await this.categoriesService.create(category);
    }
  }

  private async restaurantSeed() {
    const restaurants = initialData.restaurants;
    for (const restaurant of restaurants) {
      await this.restaurantsService.create(restaurant);
    }
  }

  private async dishCategorySeed() {
    const dishCategories = initialData.dishCategories;
    for (const dishCategory of dishCategories) {
      await this.dishCategoriesService.create(dishCategory);
    }
  }

  private async dishseed() {
    const dishes = initialData.dishes;
    for (const dish of dishes) {
      await this.dishesService.create(dish);
    }
  }

  async dropAllTables(): Promise<void> {
    await this.dataSource.dropDatabase();
    await this.dataSource.synchronize();
  }
}
