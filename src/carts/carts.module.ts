import { Module } from '@nestjs/common';
import { CartsService } from './services/carts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { DishCart } from 'src/carts/entities/dish-cart.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Address } from 'src/addresses/entities/address.entity';
import { CartController } from './controllers/carts.controller';
import { DishCartsService } from './services/dish-carts.service';
import { DishesModule } from 'src/dishes/dishes.module';
import { ToppingDishCartsModule } from 'src/topping-dish-carts/topping-dish-carts.module';

@Module({
  controllers: [CartController],
  providers: [CartsService, DishCartsService],
  imports: [
    TypeOrmModule.forFeature([Cart, DishCart, Restaurant, Address]),
    DishesModule,
    AuthModule,
    ToppingDishCartsModule,
  ],
  exports: [CartsService, DishCartsService],
})
export class CartsModule {}
