import { IsInt, IsPositive } from 'class-validator';

export class FavoriteRestaurantDto {
  @IsInt()
  @IsPositive()
  readonly restaurantId: number;
}
