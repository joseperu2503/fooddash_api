import { Module } from '@nestjs/common';
import { RestaurantsService } from './services/restaurants.service';
import { RestaurantsController } from './controllers/restaurants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantCategoriesModule } from 'src/restaurant-categories/restaurant-categories.module';
import { AuthModule } from 'src/auth/auth.module';
import { FavoriteRestaurant } from 'src/favorites/entities/favorite-restaurant.entity';
import { DishCategory } from 'src/dish-categories/entities/dish-category.entity';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  imports: [
    TypeOrmModule.forFeature([Restaurant, FavoriteRestaurant, DishCategory]),
    RestaurantCategoriesModule,
    AuthModule,
  ],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
