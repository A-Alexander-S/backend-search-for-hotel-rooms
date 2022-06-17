import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
  Header
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { HelperFileLoader } from 'src/utils/HelperFileLoader';
import { EditRoomsDto } from './dtos/edit-rooms-dto';
import { CreateRoomsDto } from './dtos/create-rooms-dto';
import { FeedbacksService } from './feedbacks/feedbacks.service';
import { RoomsEntity } from './rooms.entity';
import { RoomsService } from './rooms.service';

const PATH_ROOMS = '/rooms-static/';
HelperFileLoader.path = PATH_ROOMS;

@Controller('rooms')
export class RoomsController {

  constructor(
    private readonly roomsService: RoomsService,
    private readonly feedbacksService: FeedbacksService
  ) { }

  @Get('/api/all')
  @Header('Access-Control-Allow-Origin', '*')
  async getAll(): Promise<RoomsEntity[]> {
    return this.roomsService.getAll();
  }

  @Get('/api/detail/:id')
  async get(
    @Param('id', ParseIntPipe) id: number
  ): Promise<RoomsEntity> {
    // let idInt = parseInt(id);
    const room = await this.roomsService.findById(id);
    // const feedback = this.feedbacksService.find(idInt);
    if (!room) {
      throw new HttpException(
        {
          staus: HttpStatus.NOT_FOUND,
          error: 'Номер был не найден'
        },
        HttpStatus.NOT_FOUND
      )
    }
    return room;
  }

  @Post('/api')
  @UseInterceptors(
    FileInterceptor('imgRooms', {
      storage: diskStorage({
        destination: HelperFileLoader.destinationPath, // (req, file, cb) => cb(null,'./public/rooms-static/')
        filename: HelperFileLoader.customFileName, // (req, file, cb) => cb(null, getRandomInt() + 'jpeg')
      }),
    }),
  )
  async create(
    @Body() room: CreateRoomsDto,
    @UploadedFile() imgsRoom: Express.Multer.File
  ): Promise<RoomsEntity> {
    //Проверка
    const fileExtansion = imgsRoom.originalname.split('.').reverse()[0];
    if (!fileExtansion || !fileExtansion.match(/(jpg|jpeg|png|gif)$/)) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Неверный формат данных',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    room.imgsRoom = PATH_ROOMS + imgsRoom.filename;
    const createdRooms = await this.roomsService.create(room);
    return createdRooms;
  }

  @Put('/api/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() room: EditRoomsDto
  ): Promise<RoomsEntity> {
    const roomEditable = await this.roomsService.edit(id, room)
    if (!roomEditable) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Неверный формат данных',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return roomEditable;
  }

  @Delete('/api/:id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const isRemoved = await this.roomsService.remove(id);
    throw new HttpException(
      {
        status: HttpStatus.OK,
        error: isRemoved ? 'Новость удалена' : 'передан неверный индентификатор',
      },
      HttpStatus.OK,
    );
  }
}
