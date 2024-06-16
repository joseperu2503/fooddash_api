import { Module } from '@nestjs/common';
import { DishCartsService } from './dish-carts.service';
import { DishCartsController } from './dish-carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishCart } from './entities/dish-cart.entity';

@Module({
  controllers: [DishCartsController],
  providers: [DishCartsService],
  imports: [TypeOrmModule.forFeature([DishCart])],
  exports: [DishCartsService],
})
export class DishCartsModule {}
