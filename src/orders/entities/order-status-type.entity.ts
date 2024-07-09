import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from './order-status.entity';

@Entity('order_status_types')
export class OrderStatusType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  name: string;

  @OneToMany(() => OrderStatus, (order) => order.orderStatusType)
  orderStatuses: OrderStatus[];
}
