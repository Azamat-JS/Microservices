import { CreateUserDto, Empty, PaginationDto, UpdateUserDto, USER_SERVICE_NAME, UserServiceClient } from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { AUTH_SERVICE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, ReplaySubject } from 'rxjs';


@Injectable()
export class UsersService implements OnModuleInit{
  private userService: UserServiceClient

  constructor(@Inject(AUTH_SERVICE) private client: ClientGrpc){}
  onModuleInit() {
    this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  create(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto)
  }

 async findAll() {
return await firstValueFrom(this.userService.findAllUsers({} as Empty));
  }

  findOne(id: string) {
    return this.userService.findOneUser({id})
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({ ...updateUserDto, id })
  }

  remove(id: string) {
    return this.userService.removeUser({id})
  }

  emailUsers(){
    const users$ = new ReplaySubject<PaginationDto>();

    users$.next({page: 0, skip: 25})

    users$.complete();

    let chunkNumber = 1;

    this.userService.queryUsers(users$).subscribe(users => {
      console.log('Chunk', chunkNumber);
      chunkNumber += 1;
    })
  }

//   emailUsers() {
//   const users$ = new ReplaySubject<PaginationDto>();
//   const pageSize = 25;
//   const maxPages = 10; // for example, fetch 10 chunks

//   for (let i = 0; i < maxPages; i++) {
//     users$.next({ page: i, skip: pageSize });
//   }

//   users$.complete();

//   let chunkNumber = 1;

//   this.userService.queryUsers(users$).subscribe({
//     next: (users) => {
//       console.log(`Chunk ${chunkNumber}:`, users.users.length, 'users');
//       chunkNumber++;
//     },
//     complete: () => {
//       console.log('All user chunks received.');
//     },
//     error: (err) => {
//       console.error('Error streaming users:', err);
//     }
//   });
// }

}
