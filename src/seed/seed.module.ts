import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';
import { RestaurantCategoriesModule } from 'src/categories/restaurant-categories.module';
import { DishCategoriesModule } from 'src/dish-categories/dish-categories.module';
import { DishesModule } from 'src/dishes/dishes.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    RestaurantsModule,
    RestaurantCategoriesModule,
    DishCategoriesModule,
    DishesModule,
  ],
})
export class SeedModule {}