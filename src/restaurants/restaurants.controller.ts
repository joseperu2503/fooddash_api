import {
  Controller,
  Get,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import {
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
  @Auth(true)
  @ApiOperation({ summary: 'Retrieve a paginated list of restaurants' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination (default is 1)',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit of items per page (default is 10)',
    example: 10,
  })
  @ApiQuery({
    name: 'restaurantCategoryId',
    required: false,
    type: Number,
    description: 'Optional filter by restaurant category ID',
  })
  @ApiResponse({
    status: 200,
    description: 'List of restaurants successfully retrieved',
    type: FindAllRestaurantsResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request parameters',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('restaurantCategoryId') restaurantCategoryId?: number,
    @GetUser() user?: User,
  ) {
    return this.restaurantsService.findAll({
      page,
      limit,
      restaurantCategoryId,
      user,
    });
  }

  @Get(':id')
  @Auth(true)
  @ApiOperation({
    summary: 'Retrieve toppings for a specific restaurant',
    description:
      'Returns detailed information of a specific restaurant. If the user is authenticated, it also indicates whether the restaurant is a favorite of the user.',
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the restaurant',
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
  })
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.restaurantsService.findOne(id, user);
  }
  @Get(':id/dishes')
  @Auth(true)
  @ApiOperation({
    summary:
      'Retrieve a list of categories and dishes for a specific restaurant',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the restaurant',
    example: 1,
  })
  dishes(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.dishes(id);
  }
}
