import { User } from 'src/auth/entities/user.entity';
import { DishCart } from 'src/dish-carts/entities/dish-cart.entity';
import { Dish } from 'src/dishes/entities/dish.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
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

@Entity('topping_dish_carts')
export class ToppingDishCart {
  @PrimaryGeneratedColumn()
  id: number;

  //un ToppingDishCart tiene un DishCart
  @ManyToOne(() => DishCart, (dishCart) => dishCart.toppingDishCarts)
  @JoinColumn({ name: 'dish_id' })
  dishCart: DishCart;
}
