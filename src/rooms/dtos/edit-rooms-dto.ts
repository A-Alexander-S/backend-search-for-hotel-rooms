import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
  ValidateIf
} from "class-validator";


export class EditRoomsDto {
  @IsNumber()
  @ValidateIf((o) => o.roomNumber || o.roomNumber === '')
  roomNumber: number;

  @IsNumber()
  @ValidateIf((o) => o.price || o.price === '')
  price: number;

  @IsNumber()
  @ValidateIf((o) => o.countBedrooms || o.countBedrooms === '')
  countBedrooms: number;

  @IsNumber()
  @ValidateIf((o) => o.countBeds || o.countBeds === '')
  countBeds: number;

  @IsNumber()
  @ValidateIf((o) => o.countBathrooms || o.countBathrooms === '')
  countBathrooms: number;

  @IsNumber()
  @ValidateIf((o) => o.corridorWidth || o.corridorWidth === '')
  corridorWidth: number;

  @IsBoolean()
  @ValidateIf((o) => o.desktop || o.desktop === '')
  desktop: boolean;

  @IsBoolean()
  @ValidateIf((o) => o.chairForFeeding || o.chairForFeeding === '')
  chairForFeeding: boolean;

  @IsBoolean()
  @ValidateIf((o) => o.crib || o.crib === '')
  crib: boolean;

  @IsBoolean()
  @ValidateIf((o) => o.airConditioning || o.airConditioning === '')
  airConditioning: boolean;

  @IsBoolean()
  @ValidateIf((o) => o.noiseAbsorbingWalls || o.noiseAbsorbingWalls === '')
  noiseAbsorbingWalls: boolean;

  @IsBoolean()
  @ValidateIf((o) => o.windowInEveryBedroom || o.windowInEveryBedroom === '')
  windowInEveryBedroom: boolean;

  @IsBoolean()
  @ValidateIf((o) => o.smoke || o.smoke === '')
  smoke: boolean;

  @IsBoolean()
  @ValidateIf((o) => o.pets || o.pets === '')
  pets: boolean;

  @IsBoolean()
  @ValidateIf((o) => o.guests || o.guests === '')
  guests: boolean;

  @IsString()
  @ValidateIf((o) => o.imgRooms || o.imgRooms === '')
  imgsRoom: string
}