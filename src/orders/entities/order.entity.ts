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
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Address } from 'src/addresses/entities/address.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  //muchos User tienen un Order
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User;

  //muchos Address tienen un Order
  @ManyToOne(() => Address, (address) => address.orders)
  @JoinColumn({ name: 'address_id' })
  address: Address;
}
