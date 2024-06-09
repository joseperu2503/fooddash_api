import { Injectable } from '@nestjs/common';
import { initialData } from './data/seed-data';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { CategoriesService } from 'src/categories/categories.service';
import { DataSource } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    private readonly restaurantsService: RestaurantsService,
    private readonly categoriesService: CategoriesService,
    private readonly dataSource: DataSource,
  ) {}

  async runSeed() {
    await this.dropAllTables();
    await this.insertNewCategories();
    await this.insertNewRestaurants();
    return 'SEED EXECUTED';
  }

  private async insertNewCategories() {
    const categories = initialData.categories;

    for (const category of categories) {
      await this.categoriesService.create(category);
    }

    return true;
  }

  private async insertNewRestaurants() {
    const restaurants = initialData.restaurants;
    for (const restaurant of restaurants) {
      await this.restaurantsService.create(restaurant);
    }

    return true;
  }

  async dropAllTables(): Promise<void> {
    await this.dataSource.dropDatabase();
    await this.dataSource.synchronize();
  }
}
