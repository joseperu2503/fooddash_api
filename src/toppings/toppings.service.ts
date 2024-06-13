import { Injectable } from '@nestjs/common';
import { CreateToppingDto } from './dto/create-topping.dto';
import { UpdateToppingDto } from './dto/update-topping.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Topping } from './entities/topping.entity';
import { Repository } from 'typeorm';
import { ToppingCategoriesService } from 'src/topping-categories/topping-categories.service';

@Injectable()
export class ToppingsService {
  constructor(
    @InjectRepository(Topping)
    private readonly toppingRepository: Repository<Topping>,
    private toppingCategoriesService: ToppingCategoriesService,
  ) {}

  async create(createToppingDto: CreateToppingDto) {
    const topping = this.toppingRepository.create(createToppingDto);
    const toppingCategory = await this.toppingCategoriesService.findOne(
      createToppingDto.toppingCategoryId,
    );

    topping.toppingCategory = toppingCategory;

    await this.toppingRepository.save(topping);
    return topping;
  }

  findAll() {
    return `This action returns all toppings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topping`;
  }

  update(id: number, updateToppingDto: UpdateToppingDto) {
    return `This action updates a #${id} topping`;
  }

  remove(id: number) {
    return `This action removes a #${id} topping`;
  }
}
