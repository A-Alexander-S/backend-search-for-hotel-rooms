import {
  IsEmail,
} from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { RoomsEntity } from "../rooms/rooms.entity";

@Entity('users')
export class UsersEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column('text')
  patronymic: string;

  @Column('text')
  @IsEmail()
  email: string;

  @Column('text')
  password: string;

  @OneToMany(() => RoomsEntity, (rooms_id) => rooms_id.userId)
  roomsId: RoomsEntity[]

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}