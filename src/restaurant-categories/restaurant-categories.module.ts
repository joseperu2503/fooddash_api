import { Module } from '@nestjs/common';
import { RestaurantCategoriesService } from './services/restaurant-categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantCategory } from './entities/restaurant-category.entity';

@Module({
  controllers: [],
  providers: [RestaurantCategoriesService],
  imports: [TypeOrmModule.forFeature([RestaurantCategory])],
  exports: [RestaurantCategoriesService],
})
export class RestaurantCategoriesModule {}
