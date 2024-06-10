import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantCategoriesModule } from 'src/categories/restaurant-categories.module';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  imports: [TypeOrmModule.forFeature([Restaurant]), RestaurantCategoriesModule],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
