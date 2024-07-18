import { IsInt, IsPositive } from 'class-validator';

export class FavoriteDishDto {
  @IsInt()
  @IsPositive()
  readonly dishId: number;
}
