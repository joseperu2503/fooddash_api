import { RestaurantCategory } from 'src/restaurant-categories/entities/restaurant-category.entity';
import { DishCategory } from 'src/dish-categories/entities/dish-category.entity';
import { ToppingCategory } from 'src/topping-categories/entities/topping-category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cart } from 'src/carts/entities/cart.entity';
import { Order } from 'src/orders/entities/order.entity';
import { FavoriteRestaurant } from 'src/favorites/entities/favorite-restaurant.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('restaurants')
export class Restaurant {
  @ApiProperty({
    description: 'Unique identifier for the restaurant',
    example: '1',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Name of the restaurant',
    uniqueItems: true,
    example: 'Dunkin',
  })
  @Column('text', {
    unique: true,
  })
  name: string;

  @ApiProperty({
    description: 'Address of the restaurant',
    example: '1104 Lexington Ave, New York, NY 10075, EE. UU.',
  })
  @Column('text')
  address: string;

  @ApiProperty({
    description: 'URL of the restaurant logo',
    example:
      'https://img.cdn4dd.com/p/media/restaurant/cover_square/98851814-9e10-467f-8867-ec8586529624.png',
  })
  @Column('text')
  logo: string;

  @ApiProperty({
    description: 'URL of the restaurant backdrop',
    example:
      'https://doordash-static.s3.amazonaws.com/media/store/header/eb3a3f37-7a8b-49b6-ab0a-5c6f349024f1.jpg',
  })
  @Column('text')
  backdrop: string;

  @ApiProperty({
    description: 'Latitude of the restaurant location',
    example: '40.77391679836528',
  })
  @Column('double precision')
  latitude: number;

  @ApiProperty({
    description: 'Longitude of the restaurant location',
    example: '-73.95988361975252',
  })
  @Column('double precision')
  longitude: number;

  @Column('bool', {
    default: true,
    name: 'is_active',
  })
  isActive: boolean;

  @ApiProperty({
    description: 'Opening time of the restaurant',
    example: '08:00:00',
  })
  @Column('time', { name: 'open_time' })
  openTime: string;

  @ApiProperty({
    description: 'Closing time of the restaurant',
    example: '20:00:00',
  })
  @Column('time', { name: 'close_time' })
  closeTime: string;

  // Muchos restaurantes tienen una categoría
  @ManyToOne(
    () => RestaurantCategory,
    (restaurantcategory) => restaurantcategory.restaurants,
  )
  @JoinColumn({ name: 'restaurant_category_id' })
  restaurantCategory: RestaurantCategory;

  @OneToMany(() => DishCategory, (dishCategory) => dishCategory.restaurant)
  dishCategories: DishCategory[];

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  // Un Restaurant tiene muchas ToppingCategory
  @OneToMany(
    () => ToppingCategory,
    (toppingCategory) => toppingCategory.restaurant,
  )
  toppingCategories: ToppingCategory[];

  // Un Restaurant tiene muchas Cart
  @OneToMany(() => Cart, (cart) => cart.restaurant)
  carts: Cart[];

  // Un Restaurant tiene muchas Order
  @OneToMany(() => Order, (order) => order.restaurant)
  orders: Order[];

  // Un Restaurant tiene muchos FavoriteRestaurants
  @OneToMany(
    () => FavoriteRestaurant,
    (favoriteRestaurant) => favoriteRestaurant.restaurant,
  )
  favoriteRestaurants: FavoriteRestaurant[];
}
