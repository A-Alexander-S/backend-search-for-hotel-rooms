import { IsNotEmpty, IsString, Validate, ValidateIf } from "class-validator";


export class CreateRoomsDto {
  @IsNotEmpty()
  roomNumber: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  numberBedrooms: number;

  @IsNotEmpty()
  numberBeds: number;

  @IsNotEmpty()
  numberBathrooms: number;

  // @IsNotEmpty()
  // rating: number;
  @IsNotEmpty()
  corridorWidth: number;

  @IsNotEmpty()
  desktop: boolean;

  @IsNotEmpty()
  chairForFeeding: boolean;

  @IsNotEmpty()
  crib: boolean;

  @IsNotEmpty()
  airConditioning: boolean;

  @IsNotEmpty()
  noiseAbsorbingWalls: boolean;

  @IsNotEmpty()
  windowInEveryBedroom: boolean;

  @IsNotEmpty()
  smoke: boolean;

  @IsNotEmpty()
  pets: boolean;

  @IsNotEmpty()
  guests: boolean;


  @ValidateIf((o) => o.imgRooms || o.imgRooms === '')
  imgRooms: string
}

// @IsString()
// @IsNotEmpty()
// @ValidateIf((o) => o.guests || o.guests === '')