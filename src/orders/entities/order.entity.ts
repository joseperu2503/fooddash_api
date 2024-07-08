import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Address } from 'src/addresses/entities/address.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { DishOrder } from 'src/dish-orders/entities/dish-order.entity';

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

  //muchos Restaurant tienen un Cart
  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant;

  @OneToMany(() => DishOrder, (dishOrder) => dishOrder.order)
  dishOrders: DishOrder[];
}
