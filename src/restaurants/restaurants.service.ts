import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { RestaurantCategoriesService } from 'src/restaurant-categories/restaurant-categories.service';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import {
  IPaginationMeta,
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
    private restaurantCategoriesService: RestaurantCategoriesService,
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

  async findAll(options: IPaginationOptions) {
    const products = await paginate<Restaurant>(
      this.restaurantRepository,
      options,
    );

    return new Pagination(
      products.items.map((product) => ({
        ...product,
        distance: 1500,
        time: 40,
        record: 4.6,
        recordPeople: 340,
        tags: ['Burger', 'Chicken', 'Fast Food'],
        delivery: 4.2,
      })),
      products.meta,
      products.links,
    );
  }

  async findOne(id: number) {
    const restaurant = await this.restaurantRepository.findOne({
      relations: ['dishCategories', 'dishCategories.dishes'],
      where: { id },
    });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant ${id} not found`);
    }
    return {
      ...restaurant,
      distance: 1500,
      time: 40,
      record: 4.6,
      recordPeople: 340,
      tags: ['Burger', 'Chicken', 'Fast Food'],
      delivery: 4.2,
    };
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
