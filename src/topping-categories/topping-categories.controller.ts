import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToppingCategoriesService } from './topping-categories.service';
import { CreateToppingCategoryDto } from './dto/create-topping-category.dto';
import { UpdateToppingCategoryDto } from './dto/update-topping-category.dto';

@Controller('topping-categories')
export class ToppingCategoriesController {
  constructor(
    private readonly toppingCategoriesService: ToppingCategoriesService,
  ) {}

  @Post()
  create(@Body() createToppingCategoryDto: CreateToppingCategoryDto) {
    return this.toppingCategoriesService.create(createToppingCategoryDto);
  }

  @Get()
  findAll() {
    return this.toppingCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toppingCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateToppingCategoryDto: UpdateToppingCategoryDto,
  ) {
    return this.toppingCategoriesService.update(+id, updateToppingCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toppingCategoriesService.remove(+id);
  }
}
