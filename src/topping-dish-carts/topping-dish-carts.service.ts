import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToppingDishCartDto } from './dto/create-topping-dish-cart.dto';
import { UpdateToppingDishCartDto } from './dto/update-topping-dish-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ToppingDishCart } from './entities/topping-dish-cart.entity';
import { Repository } from 'typeorm';
import { DishCart } from 'src/dish-carts/entities/dish-cart.entity';
import { Topping } from 'src/toppings/entities/topping.entity';

@Injectable()
export class ToppingDishCartsService {
  constructor(
    @InjectRepository(ToppingDishCart)
    private readonly toppingDishCartRepository: Repository<ToppingDishCart>,
    @InjectRepository(DishCart)
    private readonly dishCartRepository: Repository<DishCart>,
    @InjectRepository(Topping)
    private readonly toppingRepository: Repository<Topping>,
  ) {}

  async create(createToppingDishCartDto: CreateToppingDishCartDto) {
    const toppingDishCart = this.toppingDishCartRepository.create(
      createToppingDishCartDto,
    );

    const dishCart = await this.dishCartRepository.findOne({
      where: { id: createToppingDishCartDto.dishCartId },
    });

    if (!dishCart) {
      throw new NotFoundException(
        `Dish cart ${createToppingDishCartDto.dishCartId} not found`,
      );
    }

    const topping = await this.toppingRepository.findOne({
      where: { id: createToppingDishCartDto.toppingId },
    });

    toppingDishCart.dishCart = dishCart;
    toppingDishCart.topping = topping;

    await this.toppingDishCartRepository.save(toppingDishCart);
    return dishCart;
  }

  findAll() {
    return `This action returns all toppingDishCarts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toppingDishCart`;
  }

  update(id: number, updateToppingDishCartDto: UpdateToppingDishCartDto) {
    return `This action updates a #${id} toppingDishCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} toppingDishCart`;
  }
}
