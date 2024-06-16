import { Type } from 'class-transformer';
import { IsArray, IsInt, IsPositive, ValidateNested } from 'class-validator';

export class CreateDishCartDto {
  @IsInt()
  @IsPositive()
  readonly dishId: number;

  @IsInt()
  @IsPositive()
  readonly userId: number;

  @IsInt()
  @IsPositive()
  readonly units: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ToppingDto)
  toppings: ToppingDto[];
}

class ToppingDto {
  @IsInt()
  @IsPositive()
  readonly toppingId: number;

  @IsInt()
  @IsPositive()
  readonly units: number;
}
