import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { FeedbacksService, IFeedback } from './feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) { }

  @Post('/api/:idRoom')
  create(
    @Param('idRooms') idRoom: string,
    @Body() feedback: IFeedback): IFeedback {

    const idRoomsInt = parseInt(idRoom);
    return this.feedbacksService.create(idRoomsInt, feedback);
  }

  @Get('/api/detail/:idRooms')
  get(@Param('idRooms') idRooms: string): IFeedback[] {

    const idRoomsInt = parseInt(idRooms);
    return this.feedbacksService.find(idRoomsInt);
  }

  @Delete('/api/detail/:idRooms/:idFeedback')
  remove(
    @Param('idRooms') idRooms: string,
    @Param('idFeedback') idFeedback: string
  ): IFeedback[] {

    const idRoomsInt = parseInt(idRooms);
    const idFeedbackInt = parseInt(idFeedback);
    return this.feedbacksService.remove(idRoomsInt, idFeedbackInt);
  }
}
