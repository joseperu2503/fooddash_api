import {
  Controller,
  Get,
  Post,
  Body,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoriteDishDto } from './dto/favorite-dish.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { FavoriteRestaurantDto } from './dto/favorite-restaurant.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post('dish')
  @Auth()
  favoriteDish(
    @Body() favoriteDishDto: FavoriteDishDto,
    @GetUser() user: User,
  ) {
    return this.favoritesService.favoriteDish(favoriteDishDto, user);
  }

  @Get('dish')
  @Auth()
  @ApiOperation({
    summary: "Retrieve the authenticated user's favorite dishes",
  })
  @ApiBearerAuth()
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
  @ApiResponse({
    status: 200,
    description:
      'Successfully retrieved the list of favorite dishes for the authenticated user.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  findAllFavoriteDish(
    @GetUser() user: User,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    return this.favoritesService.findAllFavoriteDish(user, {
      page,
      limit,
    });
  }

  @Post('restaurant')
  @Auth()
  favoriteRestaurant(
    @Body() favoriteRestaurantDto: FavoriteRestaurantDto,
    @GetUser() user: User,
  ) {
    return this.favoritesService.favoriteRestaurant(
      favoriteRestaurantDto,
      user,
    );
  }

  @Get('restaurant')
  @Auth()
  @ApiOperation({
    summary: "Retrieve the authenticated user's favorite restaurants",
  })
  @ApiBearerAuth()
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
  @ApiResponse({
    status: 200,
    description:
      'Successfully retrieved the list of favorite restaurants for the authenticated user.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  findAllFavoriteRestaurant(
    @GetUser() user: User,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    return this.favoritesService.findAllFavoriteRestaurant(user, {
      page,
      limit,
    });
  }
}
