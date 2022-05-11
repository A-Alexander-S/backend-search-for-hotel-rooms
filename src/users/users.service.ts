import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user-dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private useRepository: Repository<UsersEntity>
  ) { }

  async create(user: CreateUserDto) {
    const usersEntity = new UsersEntity();
    usersEntity.firstName = user.firstName;
    usersEntity.lastName = user.lastName;
    usersEntity.patronymic = user.patronymic;
    usersEntity.email = user.email;
    usersEntity.password = user.password;

    return this.useRepository.save(usersEntity);
  }

  async findById(id: number) {

    return this.useRepository.findOne(id);
  }
}