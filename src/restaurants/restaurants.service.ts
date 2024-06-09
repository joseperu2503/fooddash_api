import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async findAll() {
    try {
      const products = await this.restaurantRepository.find();
      return products.map((product) => ({
        ...product,
        distance: 1500,
        time: 40,
        record: 4.6,
        recordPeople: 340,
        tags: ['Burger', 'Chicken', 'Fast Food'],
        delivery: 4.2,
      }));
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }

  async create(createRestaurantDto: CreateRestaurantDto) {
    try {
      const restaurant = this.restaurantRepository.create(createRestaurantDto);
      await this.restaurantRepository.save(restaurant);
      return restaurant;
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }

  private handleDbExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException();
  }

  async deleteAllRestaurants() {
    const query = this.restaurantRepository.createQueryBuilder('restaurants');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }
}
