import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { DishCategoriesModule } from 'src/dish-categories/dish-categories.module';

@Module({
  controllers: [DishesController],
  providers: [DishesService],
  imports: [TypeOrmModule.forFeature([Dish]), DishCategoriesModule],
  exports: [DishesService],
})
export class DishesModule {}
