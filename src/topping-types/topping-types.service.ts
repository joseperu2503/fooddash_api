import { Injectable } from '@nestjs/common';
import { CreateToppingTypeDto } from './dto/create-topping-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToppingType } from './entities/topping-type.entity';

@Injectable()
export class ToppingTypesService {
  constructor(
    @InjectRepository(ToppingType)
    private readonly toppingTypeRepository: Repository<ToppingType>,
  ) {}

  async create(createToppingTypeDto: CreateToppingTypeDto) {
    const toppingType = this.toppingTypeRepository.create(createToppingTypeDto);
    await this.toppingTypeRepository.save(toppingType);
    return toppingType;
  }
}
