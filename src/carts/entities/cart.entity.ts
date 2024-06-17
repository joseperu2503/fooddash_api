import { User } from 'src/auth/entities/user.entity';
import { DishCart } from 'src/dish-carts/entities/dish-cart.entity';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  //un Cart tiene un User
  @OneToOne(() => User, (user) => user.cart)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => DishCart, (dishCart) => dishCart.cart)
  dishCarts: DishCart[];
}
