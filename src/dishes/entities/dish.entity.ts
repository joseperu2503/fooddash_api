import { DishCategory } from 'src/dish-categories/entities/dish-category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('dishes')
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  image: string;

  @Column('text')
  description: string;

  @Column('float', {
    default: 0,
  })
  price: number;

  @Column('int', {
    default: 0,
  })
  stock: number;

  @Column('bool', {
    default: true,
    name: 'is_active',
  })
  isActive: boolean;

  //muchas categorias tienen una restaurante
  @ManyToOne(() => DishCategory, (dishCategory) => dishCategory.dishes)
  @JoinColumn({ name: 'dish_category_id' })
  dishCategory: DishCategory;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;
}
