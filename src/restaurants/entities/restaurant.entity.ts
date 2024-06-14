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

@Entity('restaurants')
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text')
  address: string;

  @Column('text')
  logo: string;

  @Column('text')
  backdrop: string;

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @Column('bool', {
    default: true,
    name: 'is_active',
  })
  isActive: boolean;

  @Column('time', { name: 'open_time' })
  openTime: string;

  @Column('time', { name: 'close_time' })
  closeTime: string;

  //muchos restaurantes tienen una categoria
  @ManyToOne(
    () => RestaurantCategory,
    (restaurantcategory) => restaurantcategory.restaurants,
    {
      eager: true,
    },
  )
  @JoinColumn({ name: 'restaurant_category_id' })
  restaurantCategory: RestaurantCategory;

  @OneToMany(() => DishCategory, (dishCategory) => dishCategory.restaurant)
  dishCategories: DishCategory[];

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  //un Restaurant tiene muchas ToppingCategory
  @OneToMany(
    () => ToppingCategory,
    (toppingCategory) => toppingCategory.restaurant,
  )
  toppingCategories: ToppingCategory[];
}
