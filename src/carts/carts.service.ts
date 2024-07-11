import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { DishCartsService } from 'src/dish-carts/dish-carts.service';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Address } from 'src/addresses/entities/address.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private dishCartsService: DishCartsService,

    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(createCartDto: CreateCartDto, user: User) {
    //**Eliminar el Cart existente */
    await this.remove(user);

    //**Crear Cart */
    const cart = this.cartRepository.create();

    //**Buscar Restaurant */
    const restaurant = await this.restaurantRepository.findOne({
      where: { id: createCartDto.restaurantId },
    });
    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant ${createCartDto.restaurantId} not found`,
      );
    }

    cart.restaurant = restaurant;

    //**Buscar Address */
    const address = await this.addressRepository.findOne({
      where: {
        id: createCartDto.addressId,
        user: {
          id: user.id,
        },
      },
    });

    if (!address) {
      throw new NotFoundException(
        `Address ${createCartDto.addressId} not found`,
      );
    }

    cart.address = address;

    cart.user = user;

    const deliveryFee: number = 3.9;
    const serviceFee: number = 4.9;

    cart.deliveryFee = deliveryFee;
    cart.serviceFee = serviceFee;

    cart.subtotal = 0;
    cart.total = 0;

    await this.cartRepository.save(cart);

    let subtotal: number = 0;

    for (const dish of createCartDto.dishes) {
      const dishCart = await this.dishCartsService.create({
        ...dish,
        cartId: cart.id,
      });
      subtotal = subtotal + dishCart.units * dishCart.dish.price;
    }

    cart.subtotal = parseFloat(subtotal.toFixed(2));
    cart.total = parseFloat((subtotal + deliveryFee + serviceFee).toFixed(2));
    await this.cartRepository.save(cart);

    const myCart = await this.myCart(user);
    return myCart;
  }

  async myCart(user: User) {
    const cart = await this.cartRepository.findOne({
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
        dishCarts: {
          id: true,
          units: true,
          dish: {
            id: true,
            name: true,
            image: true,
            price: true,
            description: true,
          },
          toppingDishCarts: {
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
        dishCarts: {
          dish: true,
          toppingDishCarts: {
            topping: true,
          },
        },
        restaurant: true,
        address: true,
      },
    });

    if (!cart) {
      return null;
    }

    return cart;
  }

  async findAll() {
    const carts = await this.cartRepository.find({
      relations: {
        dishCarts: {
          dish: true,
          toppingDishCarts: {
            topping: true,
          },
        },
        restaurant: true,
        user: true,
      },
    });

    return carts;
  }

  async remove(user: User) {
    const cart = await this.cartRepository.findOne({
      where: {
        user: {
          id: user.id,
        },
      },
    });

    if (cart) {
      await this.cartRepository.delete(cart);
    }

    return {
      success: true,
    };
  }
}
