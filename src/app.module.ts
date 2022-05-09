import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '27072007',
      database: 'search-for-hotel-rooms',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    RoomsModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
