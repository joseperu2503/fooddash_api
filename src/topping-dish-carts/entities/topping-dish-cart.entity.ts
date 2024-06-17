import { DishCart } from 'src/dish-carts/entities/dish-cart.entity';
import { Topping } from 'src/toppings/entities/topping.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('topping_dish_carts')
export class ToppingDishCart {
  @PrimaryGeneratedColumn()
  id: number;

  //un ToppingDishCart tiene un DishCart
  @ManyToOne(() => DishCart, (dishCart) => dishCart.toppingDishCarts)
  @JoinColumn({ name: 'dish_cart_id' })
  dishCart: DishCart;

  //muchos ToppingDishCart tienen un Topping
  @ManyToOne(() => Topping, (topping) => topping.toppingDishCarts)
  @JoinColumn({ name: 'topping_id' })
  topping: Topping;

  @Column('int')
  units: number;
}
