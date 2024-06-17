import { Module } from '@nestjs/common';
import { DishCartsService } from './dish-carts.service';
import { DishCartsController } from './dish-carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishCart } from './entities/dish-cart.entity';
import { DishesModule } from 'src/dishes/dishes.module';
import { ToppingDishCartsModule } from 'src/topping-dish-carts/topping-dish-carts.module';
import { Dish } from 'src/dishes/entities/dish.entity';
import { Cart } from 'src/carts/entities/cart.entity';

@Module({
  controllers: [DishCartsController],
  providers: [DishCartsService],
  imports: [
    TypeOrmModule.forFeature([DishCart, Dish, Cart]),
    DishesModule,
    ToppingDishCartsModule,
  ],
  exports: [DishCartsService],
})
export class DishCartsModule {}
