import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurants')
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text')
  address: string;

  @Column('text')
  logo: string;

  @Column('text')
  backdrop: string;

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @Column('time')
  openTime: string;

  @Column('time')
  closeTime: string;
}
