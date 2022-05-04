import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
  imports: [FeedbacksModule]
})
export class RoomsModule {}
