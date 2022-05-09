import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsEntity } from './rooms.entity';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
  imports: [
    TypeOrmModule.forFeature([RoomsEntity]),
    FeedbacksModule
  ]
})
export class RoomsModule { }
