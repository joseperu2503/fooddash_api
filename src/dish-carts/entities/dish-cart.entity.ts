import { User } from 'src/auth/entities/user.entity';
import { Dish } from 'src/dishes/entities/dish.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { ToppingDishCart } from 'src/topping-dish-carts/entities/topping-dish-cart.entity';
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

@Entity('dish_carts')
export class DishCart {
  @PrimaryGeneratedColumn()
  id: number;

  //un DishCart tiene un Dish
  @ManyToOne(() => Dish, (dish) => dish.dishCarts)
  @JoinColumn({ name: 'dish_id' })
  dish: Dish;

  //un DishCart tiene un User
  @ManyToOne(() => User, (user) => user.dishCarts)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('int', {
    default: 0,
  })
  units: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  //un DishCart tiene muchas ToppingDishCart
  @OneToMany(
    () => ToppingDishCart,
    (toppingDishCart) => toppingDishCart.dishCart,
  )
  toppingDishCarts: ToppingDishCart[];
}
