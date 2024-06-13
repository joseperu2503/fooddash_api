import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateToppingCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsInt()
  @IsPositive()
  readonly restaurantId: number;

  @IsInt()
  @IsPositive()
  maxToppings: number;

  @IsInt()
  @IsPositive()
  minToppings: number;
}
