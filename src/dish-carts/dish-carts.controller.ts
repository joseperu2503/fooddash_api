import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DishCartsService } from './dish-carts.service';
import { CreateDishCartDto } from './dto/create-dish-cart.dto';
import { UpdateDishCartDto } from './dto/update-dish-cart.dto';

@Controller('dish-carts')
export class DishCartsController {
  constructor(private readonly dishCartsService: DishCartsService) {}

  @Post()
  create(@Body() createDishCartDto: CreateDishCartDto) {
    return this.dishCartsService.create(createDishCartDto);
  }

  @Get()
  findAll() {
    return this.dishCartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishCartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDishCartDto: UpdateDishCartDto) {
    return this.dishCartsService.update(+id, updateDishCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishCartsService.remove(+id);
  }
}
