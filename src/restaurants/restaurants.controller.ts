import {
  Controller,
  Get,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RestaurantsService } from './restaurants.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import {
  RestaurantResponse,
  FindAllRestaurantsResponse,
} from './dto/restaurant-response.dto';

@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit of items per page',
    example: 10,
  })
  @ApiQuery({
    name: 'restaurantCategoryId',
    required: false,
    type: Number,
    description: 'Filter by restaurant category',
  })
  @ApiResponse({
    status: 200,
    description: 'List of restaurants has been successfully retrieved.',
    type: FindAllRestaurantsResponse,
  })
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('restaurantCategoryId')
    restaurantCategoryId?: number,
  ) {
    return this.restaurantsService.findAll({
      page,
      limit,
      restaurantCategoryId,
    });
  }

  @Get(':id')
  @Auth(true)
  @ApiOperation({
    summary: 'Get a restaurant by its ID',
    description:
      'Returns detailed information of a specific restaurant. If the user is authenticated, it also indicates whether the restaurant is a favorite of the user.',
  })
  @ApiBearerAuth() // Indica que el endpoint puede llevar un token (pero no es obligatorio)
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the restaurant',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved restaurant information',
    type: RestaurantResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Restaurant not found',
    schema: {
      example: {
        message: 'Restaurant 1 not found',
        error: 'Not Found',
        statusCode: 404,
      },
    },
  })
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.restaurantsService.findOne(id, user);
  }

  @ApiExcludeEndpoint()
  @Get(':id/dishes')
  dishes(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.dishes(id);
  }
}
