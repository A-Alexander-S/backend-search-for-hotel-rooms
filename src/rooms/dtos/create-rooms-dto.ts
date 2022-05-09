import {
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
  @IsInt()
  roomNumber: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  price: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  countBedrooms: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  countBeds: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  countBathrooms: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
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
  imgsRoom: string

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  rating: number
}

// @IsString()
// @IsNotEmpty()
// @ValidateIf((o) => o.guests || o.guests === '')