import { Module } from '@nestjs/common';
import { ToppingDishCartsService } from './topping-dish-carts.service';
import { ToppingDishCartsController } from './topping-dish-carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToppingDishCart } from './entities/topping-dish-cart.entity';

@Module({
  controllers: [ToppingDishCartsController],
  providers: [ToppingDishCartsService],
  imports: [TypeOrmModule.forFeature([ToppingDishCart])],
  exports: [ToppingDishCartsService],
})
export class ToppingDishCartsModule {}
