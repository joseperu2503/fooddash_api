import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsPositive, ValidateNested } from 'class-validator';
import { CreateToppingDishCartDto } from 'src/carts/dto/create-topping-dish-cart.dto';

export class CreateDishCartDto {
  @IsInt()
  @IsPositive()
  readonly dishId: number;

  @IsInt()
  @IsPositive()
  readonly cartId: number;

  @IsInt()
  @IsPositive()
  readonly units: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Topping)
  toppings: Topping[];
}

class Topping extends OmitType(CreateToppingDishCartDto, [
  'dishCartId',
] as const) {}
