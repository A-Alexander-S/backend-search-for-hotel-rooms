import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomsDto } from './dtos/create-rooms-dto';
import { EditRoomsDto } from './dtos/edit-rooms-dto';
import { IFeedback } from './feedbacks/feedbacks.service';
import { RoomsEntity } from './rooms.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomsEntity)
    private roomsRepository: Repository<RoomsEntity>
  ) { }

  async create(room: CreateRoomsDto): Promise<RoomsEntity> {
    const roomsEntity = new RoomsEntity();
    roomsEntity.roomNumber = room.roomNumber;
    roomsEntity.price = room.price;
    roomsEntity.countBedrooms = room.countBedrooms;
    roomsEntity.countBeds = room.countBathrooms;
    roomsEntity.countBathrooms = room.countBathrooms;
    roomsEntity.corridorWidth = room.corridorWidth;
    roomsEntity.desktop = room.desktop;
    roomsEntity.chairForFeeding = room.chairForFeeding;
    roomsEntity.crib = room.crib;
    roomsEntity.airConditioning = room.airConditioning;
    roomsEntity.noiseAbsorbingWalls = room.noiseAbsorbingWalls;
    roomsEntity.windowInEveryBedroom = room.windowInEveryBedroom;
    roomsEntity.smoke = room.smoke;
    roomsEntity.pets = room.pets;
    roomsEntity.guests = room.guests;
    roomsEntity.imgsRoom = room.imgsRoom;
    roomsEntity.rating = room.rating;

    return this.roomsRepository.save(roomsEntity);
  }

  async findById(id: number): Promise<RoomsEntity> {
    return this.roomsRepository.findOne(id);
  }

  async getAll(): Promise<RoomsEntity[]> {
    return this.roomsRepository.find({});
  }

  async edit(id: number, room: EditRoomsDto): Promise<RoomsEntity> | null {
    const editableRooms = await this.findById(id);
    if (editableRooms) {
      // const roomEntity = new RoomsEntity;

      editableRooms.roomNumber = room.roomNumber || editableRooms.roomNumber;
      editableRooms.price = room.price || editableRooms.roomNumber;
      editableRooms.countBedrooms = room.countBedrooms || editableRooms.roomNumber;
      editableRooms.countBeds = room.countBathrooms || editableRooms.roomNumber;
      editableRooms.countBathrooms = room.countBathrooms || editableRooms.roomNumber;
      editableRooms.corridorWidth = room.corridorWidth || editableRooms.roomNumber;
      editableRooms.desktop = room.desktop || editableRooms.desktop;
      editableRooms.chairForFeeding = room.chairForFeeding || editableRooms.chairForFeeding;
      editableRooms.crib = room.crib || editableRooms.crib;
      editableRooms.airConditioning = room.airConditioning || editableRooms.airConditioning;
      editableRooms.noiseAbsorbingWalls = room.noiseAbsorbingWalls || editableRooms.noiseAbsorbingWalls;
      editableRooms.windowInEveryBedroom = room.windowInEveryBedroom || editableRooms.windowInEveryBedroom;
      editableRooms.smoke = room.smoke || editableRooms.smoke;
      editableRooms.pets = room.pets || editableRooms.pets;
      editableRooms.guests = room.guests || editableRooms.guests;
      editableRooms.imgsRoom = room.imgsRoom || editableRooms.imgsRoom;

      return this.roomsRepository.save(editableRooms);
    }
    return null;
  }

  async remove(id: number): Promise<RoomsEntity> | null {
    const removeRoom = await this.findById(id);
    if (removeRoom) {
      return this.roomsRepository.remove(removeRoom);
    }
    return null;
  }
}
