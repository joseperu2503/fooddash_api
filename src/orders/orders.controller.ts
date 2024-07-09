import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @Auth()
  create(@Body() createOrderDto: CreateOrderDto, @GetUser() user: User) {
    return this.ordersService.create(createOrderDto, user);
  }

  @Get('my-orders')
  @Auth()
  myOrders(@GetUser() user: User) {
    return this.ordersService.myOrders(user);
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.ordersService.findOne(user, id);
  }
}
