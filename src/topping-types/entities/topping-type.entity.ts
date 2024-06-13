import { ToppingCategory } from 'src/topping-categories/entities/topping-category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('topping-types')
export class ToppingType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  //un ToppingType tiene muchas ToppingCategory
  @OneToMany(
    () => ToppingCategory,
    (toppingCategory) => toppingCategory.toppingType,
  )
  toppingCategories: ToppingCategory[];
}
