import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

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

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}