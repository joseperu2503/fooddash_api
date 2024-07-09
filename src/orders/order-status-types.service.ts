import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderStatusType } from './entities/order-status-type.entity';
import { CreateOrderStatusTypeDto } from './dto/create-order-status-type.dto';

@Injectable()
export class OrderStatusTypesService {
  constructor(
    @InjectRepository(OrderStatusType)
    private readonly orderStatusTypeRepository: Repository<OrderStatusType>,
  ) {}

  async create(createOrderStatusTypeDto: CreateOrderStatusTypeDto) {
    const orderStatusType = this.orderStatusTypeRepository.create(
      createOrderStatusTypeDto,
    );
    await this.orderStatusTypeRepository.save(orderStatusType);
  }
}
