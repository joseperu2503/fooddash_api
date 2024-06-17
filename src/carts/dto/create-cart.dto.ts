import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { CreateDishCartDto } from 'src/dish-carts/dto/create-dish-cart.dto';

export class CreateCartDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dish)
  readonly dishes: Dish[];
}

class Dish extends OmitType(CreateDishCartDto, ['cartId'] as const) {}
