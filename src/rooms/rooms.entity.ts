import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import { UsersEntity } from "../users/users.entity";
@Entity('rooms')
export class RoomsEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  roomNumber: number;

  @Column('numeric')
  price: number;

  @Column('integer')
  countBedrooms: number;

  @Column('integer')
  countBeds: number;

  @Column('integer')
  countBathrooms: number;

  @Column('integer')
  corridorWidth: number;

  @Column('boolean')
  desktop: boolean;

  @Column('boolean')
  chairForFeeding: boolean;

  @Column('boolean')
  crib: boolean;

  @Column('boolean')
  airConditioning: boolean;

  @Column('boolean')
  noiseAbsorbingWalls: boolean;

  @Column('boolean')
  windowInEveryBedroom: boolean;

  @Column('boolean')
  smoke: boolean;

  @Column('boolean')
  pets: boolean;

  @Column('boolean')
  guests: boolean;

  @Column('text', { nullable: true })
  imgsRoom: string;

  @Column('numeric')
  rating: number;

  @ManyToOne(() => UsersEntity, (user_id) => user_id.roomsId)
  userId: UsersEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}