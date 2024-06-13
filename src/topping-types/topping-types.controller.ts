import { Controller, Post, Body } from '@nestjs/common';
import { ToppingTypesService } from './topping-types.service';
import { CreateToppingTypeDto } from './dto/create-topping-type.dto';

@Controller('topping-types')
export class ToppingTypesController {
  constructor(private readonly toppingTypesService: ToppingTypesService) {}

  @Post()
  create(@Body() createToppingTypeDto: CreateToppingTypeDto) {
    return this.toppingTypesService.create(createToppingTypeDto);
  }
}
