import { Controller, Post, Body } from '@nestjs/common';
import { ToppingsService } from './toppings.service';
import { CreateToppingDto } from './dto/create-topping.dto';

@Controller('toppings')
export class ToppingsController {
  constructor(private readonly toppingsService: ToppingsService) {}

  @Post()
  create(@Body() createToppingDto: CreateToppingDto) {
    return this.toppingsService.create(createToppingDto);
  }
}
