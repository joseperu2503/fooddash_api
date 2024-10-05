import { ApiProperty } from '@nestjs/swagger';
import { IPaginationMetaSwagger } from 'src/common/pagination-with-swagger';
import { Restaurant } from '../entities/restaurant.entity';

export class RestaurantResponse extends Restaurant {
  @ApiProperty({
    description: 'Distance to the restaurant in meters',
    example: 1500.5,
  })
  distance: number;

  @ApiProperty({
    description: 'Estimated delivery time in minutes',
    example: 40.5,
  })
  time: number;

  @ApiProperty({ description: 'Restaurant rating', example: 4.6 })
  record: number;

  @ApiProperty({
    description: 'Number of people who rated the restaurant',
    example: 340,
    minimum: 0,
    maximum: 5,
  })
  recordPeople: number;

  @ApiProperty({ description: 'Delivery price', example: 4.2 })
  delivery: number;

  @ApiProperty({
    description:
      'Indicates whether the restaurant is marked as favorite by the user',
    example: true,
  })
  isFavorite: boolean;
}

export class FindAllRestaurantsResponse {
  @ApiProperty({
    description: 'List of restaurants returned in the pagination',
    type: () => RestaurantResponse,
    isArray: true,
  })
  readonly items: RestaurantResponse[];

  @ApiProperty({
    description: 'Meta information related to the pagination',
    type: () => IPaginationMetaSwagger,
    example: {
      itemCount: 10,
      totalItems: 50,
      itemsPerPage: 10,
      totalPages: 5,
      currentPage: 1,
    },
  })
  readonly meta: IPaginationMetaSwagger;
}
