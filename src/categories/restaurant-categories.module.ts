import { Module } from '@nestjs/common';
import { RestaurantCategoriesService } from './restaurant-categories.service';
import { RestaurantCategoriesController } from './restaurant-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantCategory } from './entities/restaurant-category.entity';

@Module({
  controllers: [RestaurantCategoriesController],
  providers: [RestaurantCategoriesService],
  imports: [TypeOrmModule.forFeature([RestaurantCategory])],
  exports: [RestaurantCategoriesService],
})
export class RestaurantCategoriesModule {}
