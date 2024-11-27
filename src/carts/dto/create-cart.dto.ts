import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsPositive, ValidateNested } from 'class-validator';
import { CreateDishCartDto } from 'src/carts/dto/create-dish-cart.dto';

export class CreateCartDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dish)
  readonly dishes: Dish[];

  @IsInt()
  @IsPositive()
  readonly restaurantId: number;

  @IsInt()
  @IsPositive()
  readonly addressId: number;
}

class Dish extends OmitType(CreateDishCartDto, ['cartId'] as const) {}
