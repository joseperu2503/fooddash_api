import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { DishCategoriesModule } from 'src/dish-categories/dish-categories.module';
import { Topping } from 'src/toppings/entities/topping.entity';
import { ToppingCategory } from 'src/topping-categories/entities/topping-category.entity';
import { FavoriteDish } from 'src/favorites/entities/favorite-dish.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DishesController],
  providers: [DishesService],
  imports: [
    TypeOrmModule.forFeature([Dish, Topping, ToppingCategory, FavoriteDish]),
    DishCategoriesModule,
    AuthModule,
  ],
  exports: [DishesService, TypeOrmModule],
})
export class DishesModule {}
