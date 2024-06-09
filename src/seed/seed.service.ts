import { Injectable } from '@nestjs/common';
import { initialData } from './data/seed-data';
import { RestaurantsService } from 'src/restaurants/restaurants.service';

@Injectable()
export class SeedService {
  constructor(private readonly restaruantsService: RestaurantsService) {}

  async runSeed() {
    await this.insertNewRestaurants();
    return 'SEED EXECUTED';
  }

  private async insertNewRestaurants() {
    await this.restaruantsService.deleteAllRestaurants();

    const restaurants = initialData.restaurants;
    restaurants.forEach(async (restaurant) => {
      await this.restaruantsService.create(restaurant);
    });

    return true;
  }
}
