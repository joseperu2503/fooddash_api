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
import { ApiExcludeController } from '@nestjs/swagger';

@Controller('favorites')
@ApiExcludeController()
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
