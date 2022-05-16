import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Validate,
  ValidateIf
} from "class-validator";
import { Type } from "class-transformer";


export class CreateRoomsDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  roomNumber: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  countBedrooms: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  countBeds: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  countBathrooms: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  corridorWidth: number;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  desktop: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  chairForFeeding: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  crib: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  airConditioning: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  noiseAbsorbingWalls: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  windowInEveryBedroom: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  smoke: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  pets: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  guests: boolean;

  @IsString()
  @ValidateIf((o) => o.imgRooms || o.imgRooms === '')
  imgsRoom: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  rating: number;
}