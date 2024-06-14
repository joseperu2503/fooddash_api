import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';
import { RestaurantCategoriesModule } from 'src/restaurant-categories/restaurant-categories.module';
import { DishCategoriesModule } from 'src/dish-categories/dish-categories.module';
import { DishesModule } from 'src/dishes/dishes.module';
import { ToppingsModule } from 'src/toppings/toppings.module';
import { ToppingCategoriesModule } from 'src/topping-categories/topping-categories.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    RestaurantsModule,
    RestaurantCategoriesModule,
    DishCategoriesModule,
    DishesModule,
    ToppingsModule,
    ToppingCategoriesModule,
  ],
})
export class SeedModule {}
