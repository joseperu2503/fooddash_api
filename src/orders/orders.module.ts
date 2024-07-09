import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { AuthModule } from 'src/auth/auth.module';
import { DishOrder } from 'src/dish-orders/entities/dish-order.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Address } from 'src/addresses/entities/address.entity';
import { DishOrdersModule } from 'src/dish-orders/dish-orders.module';
import { OrderStatusType } from './entities/order-status-type.entity';
import { OrderStatusTypesService } from './order-status-types.service';
import { OrderStatus } from './entities/order-status.entity';
import { OrderStatusesService } from './order-statuses.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrderStatusTypesService, OrderStatusesService],
  imports: [
    TypeOrmModule.forFeature([
      Order,
      DishOrder,
      Restaurant,
      Address,
      OrderStatusType,
      OrderStatus,
    ]),
    DishOrdersModule,
    AuthModule,
  ],
  exports: [OrdersService, OrderStatusTypesService, OrderStatusesService],
})
export class OrdersModule {}
