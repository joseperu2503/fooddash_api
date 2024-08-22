import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DishesService } from './dishes.service';

import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  findAll() {
    return this.dishesService.findAll();
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.dishesService.findOne(id, user);
  }

  // @Get(':id/toppings')
  // toppings(@Param('id', ParseIntPipe) id: number) {
  //   return this.dishesService.toppings(id);
  // }
}
