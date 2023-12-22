import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;
  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    return this.users.push(createUserDto);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(({id: userId}) => userId === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(({id: userId}) => userId === id);

    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto}
    return this.users[userIndex];
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(({id: userId}) => userId === id);
    delete this.users[userIndex];
    return this.users;
  }
}
