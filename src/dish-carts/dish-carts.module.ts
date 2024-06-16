import { Module } from '@nestjs/common';
import { DishCartsService } from './dish-carts.service';
import { DishCartsController } from './dish-carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishCart } from './entities/dish-cart.entity';
import { AuthModule } from 'src/auth/auth.module';
import { DishesModule } from 'src/dishes/dishes.module';
import { ToppingDishCartsModule } from 'src/topping-dish-carts/topping-dish-carts.module';

@Module({
  controllers: [DishCartsController],
  providers: [DishCartsService],
  imports: [
    TypeOrmModule.forFeature([DishCart]),
    AuthModule,
    DishesModule,
    ToppingDishCartsModule,
  ],
  exports: [DishCartsService],
})
export class DishCartsModule {}
