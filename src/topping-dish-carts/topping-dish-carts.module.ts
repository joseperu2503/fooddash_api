import { Module } from '@nestjs/common';
import { ToppingDishCartsService } from './topping-dish-carts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToppingDishCart } from './entities/topping-dish-cart.entity';
import { DishCart } from 'src/carts/entities/dish-cart.entity';
import { Topping } from 'src/toppings/entities/topping.entity';

@Module({
  providers: [ToppingDishCartsService],
  imports: [TypeOrmModule.forFeature([ToppingDishCart, DishCart, Topping])],
  exports: [ToppingDishCartsService],
})
export class ToppingDishCartsModule {}
