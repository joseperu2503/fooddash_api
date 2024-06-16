import { DishCart } from 'src/dish-carts/entities/dish-cart.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Column('text')
  name: string;

  @Column('text')
  lastName: string;

  @Column('bool', {
    default: true,
    name: 'is_active',
  })
  isActive: boolean;

  @Column('text')
  phone: string;

  //un User tiene muchas DishCart
  @OneToMany(() => DishCart, (dishCart) => dishCart.user)
  dishCarts: DishCart[];
}
