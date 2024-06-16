import { Injectable } from '@nestjs/common';
import { CreateDishCartDto } from './dto/create-dish-cart.dto';
import { UpdateDishCartDto } from './dto/update-dish-cart.dto';

@Injectable()
export class DishCartsService {
  create(createDishCartDto: CreateDishCartDto) {
    return 'This action adds a new dishCart';
  }

  findAll() {
    return `This action returns all dishCarts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dishCart`;
  }

  update(id: number, updateDishCartDto: UpdateDishCartDto) {
    return `This action updates a #${id} dishCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} dishCart`;
  }
}
