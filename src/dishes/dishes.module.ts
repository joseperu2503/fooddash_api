import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { DishCategoriesModule } from 'src/dish-categories/dish-categories.module';
import { Topping } from 'src/toppings/entities/topping.entity';
import { ToppingCategory } from 'src/topping-categories/entities/topping-category.entity';

@Module({
  controllers: [DishesController],
  providers: [DishesService],
  imports: [
    TypeOrmModule.forFeature([Dish, Topping, ToppingCategory]),
    DishCategoriesModule,
  ],
  exports: [DishesService],
})
export class DishesModule {}
