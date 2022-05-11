import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';
import { FeedbacksModule } from 'src/rooms/feedbacks/feedbacks.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
