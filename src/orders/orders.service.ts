import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Order } from './entities/order.entity';
import { DishOrdersService } from 'src/dish-orders/dish-orders.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/addresses/entities/address.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private dishOrdersService: DishOrdersService,

    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(createOrderDto: CreateOrderDto, user: User) {
    //**Crear Order */
    const order = this.orderRepository.create();

    //**Buscar Restaurant */
    const restaurant = await this.restaurantRepository.findOne({
      where: { id: createOrderDto.restaurantId },
    });
    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant ${createOrderDto.restaurantId} not found`,
      );
    }
    order.restaurant = restaurant;

    //**Buscar Address */
    const address = await this.addressRepository.findOne({
      where: {
        id: createOrderDto.addressId,
        user: {
          id: user.id,
        },
      },
    });

    if (!address) {
      throw new NotFoundException(
        `Address ${createOrderDto.addressId} not found`,
      );
    }

    order.address = address;

    order.user = user;
    await this.orderRepository.save(order);

    for (const dish of createOrderDto.dishes) {
      await this.dishOrdersService.create({ ...dish, orderId: order.id });
    }

    return order;
  }

  async myOrders(user: User) {
    let orders = await this.orderRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
      select: {
        address: {
          id: true,
          address: true,
          latitude: true,
          longitude: true,
        },
        restaurant: {
          id: true,
          name: true,
          address: true,
          logo: true,
          backdrop: true,
          latitude: true,
          longitude: true,
        },
        dishOrders: {
          id: true,
          units: true,
          dish: {
            id: true,
            name: true,
            image: true,
            price: true,
          },
          toppingDishOrders: {
            id: true,
            units: true,
            topping: {
              id: true,
              description: true,
              price: true,
            },
          },
        },
      },
      relations: {
        dishOrders: {
          dish: true,
          toppingDishOrders: {
            topping: true,
          },
        },
        restaurant: true,
        address: true,
      },
    });

    return orders;
  }
}
