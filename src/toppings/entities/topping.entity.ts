import { ToppingCategory } from 'src/topping-categories/entities/topping-category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('toppings')
export class Topping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column('bool', {
    default: true,
    name: 'is_active',
  })
  isActive: boolean;

  @Column('integer')
  maxLimit: string;

  @Column('float')
  price: number;

  //un Topping le pertenece a un ToppingCategory
  @ManyToOne(
    () => ToppingCategory,
    (toppingCategory) => toppingCategory.toppings,
  )
  @JoinColumn({ name: 'topping_category_id' })
  toppingCategory: ToppingCategory;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;
}
