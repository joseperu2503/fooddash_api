import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { DishCart } from 'src/dish-carts/entities/dish-cart.entity';
import { DishCartsModule } from 'src/dish-carts/dish-carts.module';
import { AuthModule } from 'src/auth/auth.module';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Address } from 'src/addresses/entities/address.entity';

@Module({
  controllers: [CartController],
  providers: [CartsService],
  imports: [
    TypeOrmModule.forFeature([Cart, DishCart, Restaurant, Address]),
    DishCartsModule,
    AuthModule,
  ],
  exports: [CartsService, TypeOrmModule],
})
export class CartsModule {}
