import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsEntity } from './rooms.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomsEntity]),
    FeedbacksModule
  ],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule { }
