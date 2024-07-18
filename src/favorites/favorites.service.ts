import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { FavoriteDishDto } from './dto/favorite-dish.dto';
import { User } from 'src/auth/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteDish } from './entities/favorite-dish.entity';
import { Repository } from 'typeorm';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Dish } from 'src/dishes/entities/dish.entity';
import { FavoriteRestaurantDto } from './dto/favorite-restaurant.dto';
import { FavoriteRestaurant } from './entities/favorite-restaurant.entity';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteDish)
    private readonly favoriteDishRepository: Repository<FavoriteDish>,

    @InjectRepository(FavoriteRestaurant)
    private readonly favoriteRestaurantRepository: Repository<FavoriteRestaurant>,

    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,

    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  async favoriteDish(favoriteDishDto: FavoriteDishDto, user: User) {
    try {
      const favoriteDish = await this.favoriteDishRepository.findOne({
        where: {
          dish: {
            id: favoriteDishDto.dishId,
          },
          user: {
            id: user.id,
          },
        },
      });

      if (favoriteDish) {
        await this.favoriteDishRepository.remove(favoriteDish);
        return {
          message: 'Dish removed from favorites successfully',
        };
      } else {
        //**Buscar Dish */
        const dish = await this.dishRepository.findOne({
          where: { id: favoriteDishDto.dishId },
        });
        if (!dish) {
          throw new NotFoundException(
            `Dish ${favoriteDishDto.dishId} not found`,
          );
        }

        const newFavoriteDish: FavoriteDish =
          this.favoriteDishRepository.create();

        newFavoriteDish.user = user;
        newFavoriteDish.dish = dish;

        await this.favoriteDishRepository.save(newFavoriteDish);

        return {
          message: 'Dish added to favorites successfully',
        };
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAllFavoriteDish(
    user: User,
    options: {
      page: number;
      limit: number;
    },
  ) {
    const favoriteDishes = await paginate<FavoriteDish>(
      this.favoriteDishRepository,
      options,
      {
        where: {
          user: {
            id: user.id,
          },
        },
        order: {
          id: 'DESC',
        },
        select: {
          id: true,
          dish: {
            id: true,
            name: true,
            image: true,
            price: true,
            description: true,
          },
        },
        relations: {
          dish: true,
        },
      },
    );

    return new Pagination(
      favoriteDishes.items,
      favoriteDishes.meta,
      favoriteDishes.links,
    );
  }

  async favoriteRestaurant(
    favoriteRestaurantDto: FavoriteRestaurantDto,
    user: User,
  ) {
    try {
      const favoriteRestaurant =
        await this.favoriteRestaurantRepository.findOne({
          where: {
            restaurant: {
              id: favoriteRestaurantDto.restaurantId,
            },
            user: {
              id: user.id,
            },
          },
        });

      if (favoriteRestaurant) {
        await this.favoriteRestaurantRepository.remove(favoriteRestaurant);
        return {
          message: 'Restaurant removed from favorites successfully',
        };
      } else {
        //**Buscar Restaurant */
        const restaurant = await this.restaurantRepository.findOne({
          where: { id: favoriteRestaurantDto.restaurantId },
        });
        if (!restaurant) {
          throw new NotFoundException(
            `Restaurant ${favoriteRestaurantDto.restaurantId} not found`,
          );
        }

        const newFavoriteRestaurant: FavoriteRestaurant =
          this.favoriteRestaurantRepository.create();

        newFavoriteRestaurant.user = user;
        newFavoriteRestaurant.restaurant = restaurant;

        await this.favoriteRestaurantRepository.save(newFavoriteRestaurant);

        return {
          message: 'Restaurant added to favorites successfully',
        };
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAllFavoriteRestaurant(
    user: User,
    options: {
      page: number;
      limit: number;
    },
  ) {
    const favoriteRestaurants = await paginate<FavoriteRestaurant>(
      this.favoriteRestaurantRepository,
      options,
      {
        where: {
          user: {
            id: user.id,
          },
        },
        order: {
          id: 'DESC',
        },
        select: {
          id: true,
          restaurant: {
            id: true,
            name: true,
            address: true,
            logo: true,
            backdrop: true,
            latitude: true,
            longitude: true,
          },
        },
        relations: {
          restaurant: true,
        },
      },
    );

    return new Pagination(
      favoriteRestaurants.items,
      favoriteRestaurants.meta,
      favoriteRestaurants.links,
    );
  }
}
