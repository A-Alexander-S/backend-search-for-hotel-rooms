import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FeedbacksService } from './feedbacks/feedbacks.service';
import { RoomsService, IRooms, IRoomsEdit } from './rooms.service';

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

  @Post('/api')
  create(@Body() room: IRooms): IRooms {
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
