import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AddressTag } from 'src/address-tags/entities/address-tag.entity';
import { AddressDeliveryDetail } from 'src/address-delivery-details/entities/address-delivery-detail.entity';
import { User } from 'src/auth/entities/user.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  city: string;

  @Column('text')
  country: string;

  @Column('text')
  address: string;

  @Column('text', { nullable: true })
  detail: string;

  @Column('text')
  references: string;

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  //un Address tiene un AddressTag
  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: 'user_id' })
  user: User;

  //un Address tiene un AddressTag
  @ManyToOne(() => AddressTag, (addressTag) => addressTag.addresses)
  @JoinColumn({ name: 'address_tag_id' })
  addressTag: AddressTag;

  //un Address tiene un AddressDeliveryDetail
  @ManyToOne(() => AddressDeliveryDetail, (addressTag) => addressTag.addresses)
  @JoinColumn({ name: 'address_delivery_id' })
  addressDeliveryDetail: AddressDeliveryDetail;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;
}
