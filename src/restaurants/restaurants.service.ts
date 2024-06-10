import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { DishCategory } from 'src/dish-categories/entities/dish-category.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
    private categoriesService: CategoriesService,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = this.restaurantRepository.create(createRestaurantDto);
    const category = await this.categoriesService.findOne(
      createRestaurantDto.categoryId,
    );

    restaurant.category = category;

    await this.restaurantRepository.save(restaurant);
    return restaurant;
  }

  async findAll() {
    const products = await this.restaurantRepository.find();
    return products.map((product) => ({
      ...product,
      distance: 1500,
      time: 40,
      record: 4.6,
      recordPeople: 340,
      tags: ['Burger', 'Chicken', 'Fast Food'],
      delivery: 4.2,
      createdAt: product.createdAt.toString(),
      updatedAt: product.updatedAt.toString(),

      date: new Date().toString(),
    }));
  }

  async findOne(id: number) {
    const restaurant = await this.restaurantRepository.findOne({
      relations: ['dishCategories', 'dishCategories.dishes'],
      where: { id },
    });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant ${id} not found`);
    }
    return restaurant;
  }

  async update(id: number, UpdateRestaurantDto: UpdateRestaurantDto) {
    const restaurant = await this.findOne(id);
    if (UpdateRestaurantDto.categoryId) {
      const category = await this.categoriesService.findOne(
        UpdateRestaurantDto.categoryId,
      );
      restaurant.category = category;
    }

    this.restaurantRepository.merge(restaurant, UpdateRestaurantDto);

    return this.restaurantRepository.save(restaurant);
  }

  remove(id: number) {
    return this.restaurantRepository.delete(id);
  }
}
