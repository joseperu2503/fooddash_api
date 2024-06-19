import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { DishCartsService } from 'src/dish-carts/dish-carts.service';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private dishCartsService: DishCartsService,

    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async create(createCartDto: CreateCartDto, user: User) {
    //**Eliminar el Cart existente */
    await this.remove(user);

    //**Crear Cart */
    const cart = this.cartRepository.create();

    const restaurant = await this.restaurantRepository.findOne({
      where: { id: createCartDto.restaurantId },
    });
    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant ${createCartDto.restaurantId} not found`,
      );
    }

    cart.restaurant = restaurant;

    cart.user = user;
    await this.cartRepository.save(cart);

    for (const dish of createCartDto.dishes) {
      await this.dishCartsService.create({ ...dish, cartId: cart.id });
    }

    const myCart = await this.myCart(user);
    return myCart;
  }

  async myCart(user: User) {
    const cart = await this.cartRepository.findOne({
      where: { user },
      relations: [
        'dishCarts',
        'restaurant',
        'dishCarts.dish',
        'dishCarts.toppingDishCarts',
        'dishCarts.toppingDishCarts.topping',
      ],
    });

    if (!cart) {
      return null;
    }

    let subtotal = 0;

    const dishCarts = cart.dishCarts.map((dishCart) => {
      subtotal = subtotal + dishCart.units * dishCart.dish.price;
      return {
        ...dishCart.dish,
        units: dishCart.units,
        toppingDishCarts: dishCart.toppingDishCarts.map((toppingDishCart) => ({
          ...toppingDishCart.topping,
          units: toppingDishCart.units,
        })),
      };
    });

    return { ...cart, subtotal, dishCarts };
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  async remove(user: User) {
    const cart = await this.cartRepository.findOne({
      where: { user },
    });

    if (cart) {
      await this.cartRepository.delete(cart);
    }

    return {
      success: true,
    };
  }
}
