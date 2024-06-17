import { Cart } from 'src/carts/entities/cart.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  //un User tiene un Cart
  @OneToOne(() => Cart, (cart) => cart.user)
  cart: Cart;
}
