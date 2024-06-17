import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { DishCartsService } from 'src/dish-carts/dish-carts.service';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private dishCartsService: DishCartsService,
  ) {}

  async create(createCartDto: CreateCartDto, user: User) {
    const cart = this.cartRepository.create();

    cart.user = user;
    await this.cartRepository.save(cart);

    for (const dish of createCartDto.dishes) {
      await this.dishCartsService.create({ ...dish, cartId: cart.id });
    }

    return cart;
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

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
