import { Module } from '@nestjs/common';
import { DishCategoriesService } from './dish-categories.service';
import { DishCategoriesController } from './dish-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishCategory } from './entities/dish-category.entity';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';

@Module({
  controllers: [DishCategoriesController],
  providers: [DishCategoriesService],
  imports: [TypeOrmModule.forFeature([DishCategory]), RestaurantsModule],
  exports: [DishCategoriesService],
})
export class DishCategoriesModule {}
