import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { HelperFileLoader } from 'src/utils/HelperFileLoader';
import { FeedbacksService } from './feedbacks/feedbacks.service';
import { RoomsService, IRooms, IRoomsEdit } from './rooms.service';

const PATH_ROOMS = '/rooms-static/';
HelperFileLoader.path = PATH_ROOMS;

@Controller('rooms')
export class RoomsController {

  constructor(
    private readonly roomsService: RoomsService,
    private readonly feedbacksService: FeedbacksService
  ) { }

  @Get('/api/all')
  getAll(): IRooms[] {
    return this.roomsService.getAll();
  }

  @Get('/api/detail/:id')
  get(@Param('id') id: string): IRooms {
    let idInt = parseInt(id);
    const rooms = this.roomsService.find(idInt);
    const feedback = this.feedbacksService.find(idInt);

    return {
      ...rooms,
      feedback
    }
  }

  @Get('/all')
  getAllView() {
    const rooms = this.roomsService.getAll();
    let html = '';
    for (const roomItem of rooms) {
      html += `
      <div>
        <p>Rooms № ${roomItem.id}</p>
        <div>id: ${roomItem.id}</div>
        <div>roomNumber: ${roomItem.roomNumber}</div>
        <div>price: ${roomItem.price}</div>
      </div>
      `
    }
    return html;
  }

  // ---
  // @Get('/detail/:idRooms')
  // getDetailView() {
  //   const rooms = this.roomsService.getAll();
  //   let html = '';
  //   for (const roomItem of rooms) {
  //     html += `
  //     <div>
  //       <p>Rooms № ${roomItem.id}</p>
  //       <div>id: ${roomItem.id}</div>
  //       <div>roomNumber: ${roomItem.roomNumber}</div>
  //       <div>price: ${roomItem.price}</div>
  //     </div>
  //     `
  //   }
  //   return html;
  // }


  // @UseInterceptors(
  //   FileInterceptor('imgRooms', {
  //     storage: diskStorage({
  //       destination: (req, file,cb) => cb(null, './public/news-static'),
  //       filename:(req, file,cb) => cb(null, getRandomInt() + '.jpeg'),
  //     }),
  //   }),
  // )
  @Post('/api')
  @UseInterceptors(
    FileInterceptor('imgRooms', {
      storage: diskStorage({
        destination: HelperFileLoader.destinationPath, // (req, file, cb) => cb(null,'./public/rooms-static/')
        filename: HelperFileLoader.customFileName, // (req, file, cb) => cb(null, getRandom() + 'jpeg')
      }),
    }),
  )
  create(
    @Body() room: IRooms,
    @UploadedFile() imgRooms: Express.Multer.File
  ): IRooms {
    //Проверка
    const fileExtansion = imgRooms.originalname.split('.').reverse()[0];
    if (!fileExtansion || !fileExtansion.match(/(jpg|jpeg|png|gif)$/)) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Неверный формат данных',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    room.imgRooms = PATH_ROOMS + imgRooms.filename;
    return this.roomsService.create(room);
  }

  @Put('/api/:id')
  edit(@Param('id') id: string, @Body() room: IRoomsEdit): IRooms {
    let idInt = parseInt(id);
    return this.roomsService.edit(idInt, room);
  }

  @Delete('/api/:id')
  remove(@Param('id') id: string): string {
    let idInt = parseInt(id);
    const isRemoved = this.roomsService.remove(idInt);
    return isRemoved ? 'Новость удалена' : 'Передан неверный индентификатор';
  }
}
