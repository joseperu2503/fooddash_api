import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToppingDishCartsService } from './topping-dish-carts.service';
import { CreateToppingDishCartDto } from './dto/create-topping-dish-cart.dto';
import { UpdateToppingDishCartDto } from './dto/update-topping-dish-cart.dto';

@Controller('topping-dish-carts')
export class ToppingDishCartsController {
  constructor(private readonly toppingDishCartsService: ToppingDishCartsService) {}

  @Post()
  create(@Body() createToppingDishCartDto: CreateToppingDishCartDto) {
    return this.toppingDishCartsService.create(createToppingDishCartDto);
  }

  @Get()
  findAll() {
    return this.toppingDishCartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toppingDishCartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToppingDishCartDto: UpdateToppingDishCartDto) {
    return this.toppingDishCartsService.update(+id, updateToppingDishCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toppingDishCartsService.remove(+id);
  }
}
