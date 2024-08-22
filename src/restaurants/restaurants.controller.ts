import {
  Controller,
  Get,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
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
  @Auth()
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.restaurantsService.findOne(id, user);
  }

  @Get(':id/dishes')
  dishes(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.dishes(id);
  }
}
