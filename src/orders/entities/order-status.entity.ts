import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Order } from './order.entity';
import { OrderStatusType } from './order-status-type.entity';

@Entity('order_statuses')
export class OrderStatus {
  @PrimaryGeneratedColumn()
  id: number;

  //Un OrderStatus tiene un OrderStatusType
  @ManyToOne(() => OrderStatusType, (orderStatus) => orderStatus.orderStatuses)
  @JoinColumn({ name: 'order_status_type_id' })
  orderStatusType: OrderStatusType;

  //Un OrderStatus tiene un Order
  @ManyToOne(() => Order, (order) => order.orderStatuses)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;
}
