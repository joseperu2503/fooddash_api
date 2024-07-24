import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post()
  create(@Body() createDishDto: CreateDishDto) {
    return this.dishesService.create(createDishDto);
  }

  @Get()
  findAll() {
    return this.dishesService.findAll();
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.dishesService.findOne(id, user);
  }

  @Get(':id/toppings')
  toppings(@Param('id', ParseIntPipe) id: number) {
    return this.dishesService.toppings(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDishDto: UpdateDishDto,
  ) {
    return this.dishesService.update(id, updateDishDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dishesService.remove(id);
  }
}
