import { User, CreateUserDto, UpdateUserDto, PaginationDto, Users } from '@app/common';
import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {  Observable, Subject } from 'rxjs';


@Injectable()
export class UsersService implements OnModuleInit{
  private readonly users: User[] = [];

  onModuleInit() {
    for (let i = 0; i <= 100; i++) {
      this.create({username: randomUUID(), password: randomUUID(), age: 0})      
    }
  }

  create(createUserDto: CreateUserDto): User {
  const user: User = {
    ...createUserDto,
    subscribed: false,
    socialMedia: {},
    id:randomUUID()
  };
  this.users.push(user)
  return user;
  }

  findAll(): Users {
    return {users: this.users}
  }

  findOne(id: string):User {
    const findUser = this.users.find((user) => user.id === id)
    if(!findUser) throw new NotFoundException(`User with id: ${id} not found0`)
      return findUser
  }

  update(id: string, updateUserDto: UpdateUserDto):User {
    const userIndex = this.users.findIndex((user) => user.id === id)
    if(userIndex !== -1){
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updateUserDto
      };
      return this.users[userIndex]
    }
    throw new NotFoundException(`User with id: ${id} not found`)
      }


  remove(id: string):User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if(userIndex !== -1) {
      return this.users.splice(userIndex)[0];
    }
    throw new NotFoundException(`User with id: ${id} not found`)
  }

queryUsers(paginationDtoStream: Observable<PaginationDto>): Observable<Users> {
  const subject = new Subject<Users>();

  const onNext = (paginationDto: PaginationDto) => {
    const start = paginationDto.page * paginationDto.skip;
    subject.next({
      users: this.users.slice(start, start + paginationDto.skip)
    })
  };
  const onComplete = () => subject.complete();
  paginationDtoStream.subscribe({
    next: onNext,
    complete: onComplete,
  });

  return subject.asObservable()
}
}
