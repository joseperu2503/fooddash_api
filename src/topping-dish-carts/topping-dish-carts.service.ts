import { Injectable } from '@nestjs/common';
import { CreateToppingDishCartDto } from './dto/create-topping-dish-cart.dto';
import { UpdateToppingDishCartDto } from './dto/update-topping-dish-cart.dto';

@Injectable()
export class ToppingDishCartsService {
  create(createToppingDishCartDto: CreateToppingDishCartDto) {
    return 'This action adds a new toppingDishCart';
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
