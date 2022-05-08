import { Injectable } from '@nestjs/common';
import { IFeedback } from './feedbacks/feedbacks.service';

export interface IRooms {
  id: number,
  roomNumber: number,
  price: number,
  numberBedrooms: number,
  numberBeds: number,
  numberBathrooms: number,
  rating?: number,
  corridorWidth: number,
  desktop: boolean,
  chairForFeeding: boolean,
  crib: boolean,
  airConditioning: boolean,
  noiseAbsorbingWalls: boolean,
  windowInEveryBedroom: boolean,
  smoke: boolean,
  pets: boolean,
  guests: boolean,
  imgRooms?: string,
  feedback?: IFeedback[],
}
export interface IRoomsEdit {
  id: number,
  roomNumber?: number,
  price?: number,
  numberBedrooms?: number,
  numberBeds?: number,
  numberBathrooms?: number,
  rating?: number,
  corridorWidth?: number,
  desktop?: boolean,
  chairForFeeding?: boolean,
  crib?: boolean,
  airConditioning?: boolean,
  noiseAbsorbingWalls?: boolean,
  windowInEveryBedroom?: boolean,
  smoke?: boolean,
  pets?: boolean,
  guests?: boolean,
}

@Injectable()
export class RoomsService {
  private readonly rooms: IRooms[] = [
    {
      id: 1,
      roomNumber: 1,
      price: 1000,
      numberBedrooms: 1,
      numberBeds: 1,
      numberBathrooms: 1,
      rating: 3,
      corridorWidth: 90,
      desktop: true,
      chairForFeeding: true,
      crib: true,
      airConditioning: true,
      noiseAbsorbingWalls: true,
      windowInEveryBedroom: true,
      smoke: true,
      pets: true,
      guests: true,
    },
    {
      id: 2,
      roomNumber: 2,
      price: 1000,
      numberBedrooms: 1,
      numberBeds: 1,
      numberBathrooms: 1,
      rating: 3,
      corridorWidth: 90,
      desktop: true,
      chairForFeeding: true,
      crib: true,
      airConditioning: true,
      noiseAbsorbingWalls: true,
      windowInEveryBedroom: true,
      smoke: true,
      pets: true,
      guests: true,
    }, {
      id: 3,
      roomNumber: 3,
      price: 1000,
      numberBedrooms: 1,
      numberBeds: 1,
      numberBathrooms: 1,
      rating: 3,
      corridorWidth: 90,
      desktop: true,
      chairForFeeding: true,
      crib: true,
      airConditioning: true,
      noiseAbsorbingWalls: true,
      windowInEveryBedroom: true,
      smoke: true,
      pets: true,
      guests: true,
    }
  ];

  create(room: IRooms): IRooms {
    this.rooms.push(room);
    return room;
  }

  find(id: number): IRooms | undefined {
    return this.rooms.find((room) => room.id == id);
  }

  getAll(): IRooms[] {
    return this.rooms;
  }

  edit(id: number, room: IRoomsEdit): IRooms | undefined {
    const indexEdit = this.rooms.findIndex((room) => room.id === id);
    if (indexEdit !== -1) {
      this.rooms[indexEdit] = {
        ...this.rooms[indexEdit],
        ...room
      };
      return this.rooms[indexEdit];
    }
    return undefined;
  }

  remove(id: number): Boolean {
    const indexRemove = this.rooms.findIndex((room) => room.id === id);
    if (indexRemove !== -1) {
      this.rooms.splice(indexRemove, 1);
      return true;
    }
    return false;
  }
}
