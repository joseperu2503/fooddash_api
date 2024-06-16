import { Injectable } from '@nestjs/common';
import { CreateDishCartDto } from './dto/create-dish-cart.dto';
import { UpdateDishCartDto } from './dto/update-dish-cart.dto';
import { DishCart } from './entities/dish-cart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DishesService } from 'src/dishes/dishes.service';
import { AuthService } from 'src/auth/auth.service';
import { ToppingDishCartsService } from 'src/topping-dish-carts/topping-dish-carts.service';

@Injectable()
export class DishCartsService {
  constructor(
    @InjectRepository(DishCart)
    private readonly dishCartRepository: Repository<DishCart>,
    private dishesService: DishesService,
    private authService: AuthService,
    private toppingDishCartsService: ToppingDishCartsService,
  ) {}

  async create(createDishCartDto: CreateDishCartDto) {
    const { toppings, ...dishCarttDetails } = createDishCartDto;

    const dishCart = this.dishCartRepository.create(dishCarttDetails);

    const dish = await this.dishesService.findOne(createDishCartDto.dishId);

    dishCart.dish = dish;

    const user = await this.authService.findOne(createDishCartDto.userId);

    dishCart.user = user;
    await this.dishCartRepository.save(dishCart);

    for (const topping of toppings) {
      await this.toppingDishCartsService.create({
        dishCartId: dishCart.id,
        toppingId: topping.toppingId,
        units: topping.units,
      });
    }

    return dishCart;
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
