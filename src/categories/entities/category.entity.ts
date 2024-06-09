import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text')
  image: string;

  @Column('bool', {
    default: true,
    name:'is_active'
  })
  isActive: boolean;

  @OneToMany(() => Restaurant, (restaurant) => restaurant.category)
  restaurants: Restaurant[];

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;
}
