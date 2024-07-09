import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Order } from './entities/order.entity';
import { DishOrdersService } from 'src/dish-orders/dish-orders.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/addresses/entities/address.entity';
import { OrderStatus } from './entities/order-status.entity';
import { OrderStatusType } from './entities/order-status-type.entity';

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

    @InjectRepository(OrderStatusType)
    private readonly orderStatusTypeRepository: Repository<OrderStatusType>,

    @InjectRepository(OrderStatus)
    private readonly orderStatusRepository: Repository<OrderStatus>,
  ) {}

  async create(createOrderDto: CreateOrderDto, user: User): Promise<Order> {
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

    const deliveryFee: number = 3.9;
    const serviceFee: number = 4.9;

    order.deliveryFee = deliveryFee;
    order.serviceFee = serviceFee;

    order.subtotal = 0;
    order.total = 0;

    await this.orderRepository.save(order);

    let subtotal: number = 0;
    //** Crear DishOrders */
    for (const dish of createOrderDto.dishes) {
      const dishOrder = await this.dishOrdersService.create({
        ...dish,
        orderId: order.id,
      });
      subtotal = subtotal + dishOrder.units * dishOrder.dish.price;
    }

    order.subtotal = parseFloat(
      (subtotal + deliveryFee + serviceFee).toFixed(1),
    );
    order.total = parseFloat((subtotal + deliveryFee + serviceFee).toFixed(1));
    await this.orderRepository.save(order);

    // **Buscar OrderStatusType con ID 1 y crear OrderStatus **
    const orderStatusType = await this.orderStatusTypeRepository.findOne({
      where: { id: 1 },
    });
    if (!orderStatusType) {
      throw new NotFoundException(`OrderStatus with ID 1 not found`);
    }

    const orderStatus = this.orderStatusRepository.create();
    orderStatus.order = order;
    orderStatus.orderStatusType = orderStatusType;
    await this.orderStatusRepository.save(orderStatus);
    return this.findOne(user, order.id);
  }

  async myOrders(user: User) {
    let orders = await this.orderRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
      select: {
        id: true,
        subtotal: true,
        deliveryFee: true,
        serviceFee: true,
        total: true,
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
        orderStatuses: {
          id: true,
          orderStatusType: {
            id: true,
            name: true,
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
        orderStatuses: {
          orderStatusType: true,
        },
      },
    });

    return orders;
  }

  async findOne(user: User, orderId: number) {
    let orders = await this.orderRepository.findOne({
      where: {
        user: {
          id: user.id,
        },
        id: orderId,
      },
      select: {
        id: true,
        subtotal: true,
        deliveryFee: true,
        serviceFee: true,
        total: true,
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
        orderStatuses: {
          id: true,
          orderStatusType: {
            id: true,
            name: true,
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
        orderStatuses: {
          orderStatusType: true,
        },
      },
    });

    return orders;
  }
}
