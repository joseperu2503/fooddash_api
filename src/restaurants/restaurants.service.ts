import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { RestaurantCategoriesService } from 'src/restaurant-categories/restaurant-categories.service';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';
import { User } from 'src/auth/entities/user.entity';
import { FavoriteRestaurant } from 'src/favorites/entities/favorite-restaurant.entity';
import { DishCategory } from 'src/dish-categories/entities/dish-category.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,

    private restaurantCategoriesService: RestaurantCategoriesService,

    @InjectRepository(FavoriteRestaurant)
    private readonly favoriteRestaurantRepository: Repository<FavoriteRestaurant>,

    @InjectRepository(DishCategory)
    private readonly dishCategoryRepository: Repository<DishCategory>,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = this.restaurantRepository.create(createRestaurantDto);
    const restaurantCategory = await this.restaurantCategoriesService.findOne(
      createRestaurantDto.restaurantCategoryId,
    );

    restaurant.restaurantCategory = restaurantCategory;

    await this.restaurantRepository.save(restaurant);
    return restaurant;
  }

  async findAll(options: {
    page: number;
    limit: number;
    restaurantCategoryId?: number;
  }) {
    let searchOptions: FindManyOptions<Restaurant> = {
      select: {
        id: true,
        address: true,
        backdrop: true,
        closeTime: true,
        latitude: true,
        logo: true,
        longitude: true,
        name: true,
        openTime: true,
      },
    };

    if (options.restaurantCategoryId) {
      searchOptions.where = {
        ...searchOptions.where,
        restaurantCategory: {
          id: options.restaurantCategoryId,
        },
      };
    }

    const products = await paginate<Restaurant>(
      this.restaurantRepository,
      options,
      searchOptions,
    );

    return new Pagination(
      products.items.map((product) => ({
        ...product,
        distance: 1500.5,
        time: 40.5,
        record: 4.6,
        recordPeople: 340,
        delivery: 4.2,
      })),
      products.meta,
      products.links,
    );
  }

  async findOne(id: number, user?: User) {
    const restaurant = await this.restaurantRepository.findOne({
      where: { id },
      select: {
        id: true,
        address: true,
        backdrop: true,
        closeTime: true,
        latitude: true,
        logo: true,
        longitude: true,
        name: true,
        openTime: true,
      },
    });

    if (!restaurant) {
      throw new NotFoundException(`Restaurant ${id} not found`);
    }

    let isFavorite = false;

    if (user) {
      const favoriteRestaurant =
        await this.favoriteRestaurantRepository.findOne({
          where: {
            restaurant: {
              id: restaurant.id,
            },
            user: {
              id: user.id,
            },
          },
        });

      isFavorite = !!favoriteRestaurant;
    }

    return {
      ...restaurant,
      distance: 1500.5,
      time: 40.5,
      record: 4.6,
      recordPeople: 340,
      delivery: 4.2,
      isFavorite: isFavorite,
    };
  }

  async dishes(restaurantId: number) {
    const dishCategories = await this.dishCategoryRepository.find({
      where: {
        restaurant: {
          id: restaurantId,
        },
      },
      select: {
        id: true,
        name: true,
        dishes: {
          id: true,
          name: true,
          image: true,
          description: true,
          price: true,
          stock: true,
        },
      },
      relations: {
        dishes: true,
      },
      order: {
        id: 'ASC',
      },
    });

    return dishCategories;
  }

  async update(id: number, UpdateRestaurantDto: UpdateRestaurantDto) {
    const restaurant = await this.findOne(id);
    if (UpdateRestaurantDto.restaurantCategoryId) {
      const category = await this.restaurantCategoriesService.findOne(
        UpdateRestaurantDto.restaurantCategoryId,
      );
      restaurant.restaurantCategory = category;
    }

    this.restaurantRepository.merge(restaurant, UpdateRestaurantDto);

    return this.restaurantRepository.save(restaurant);
  }

  remove(id: number) {
    return this.restaurantRepository.delete(id);
  }
}
