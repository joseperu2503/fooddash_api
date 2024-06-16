import { IsInt, IsPositive } from 'class-validator';

export class CreateToppingDishCartDto {
  @IsInt()
  @IsPositive()
  readonly dishCartId: number;

  @IsInt()
  @IsPositive()
  readonly toppingId: number;

  @IsInt()
  @IsPositive()
  readonly units: number;
}
