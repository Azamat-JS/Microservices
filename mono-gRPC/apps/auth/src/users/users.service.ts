import { User, CreateUserDto, UpdateUserDto, PaginationDto, Users } from '@app/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity';
import { Repository } from 'typeorm';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class UsersService {
constructor(@InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>){}
 async create(createUserDto: CreateUserDto):Promise<User> {
    const newUser = this.usersRepo.create(createUserDto)
    return await this.usersRepo.save(newUser)
  }

  findAll():Promise<User[]> {
    return this.usersRepo.find()
  }

 async findOne(id: string):Promise<User> {
   const findUser = await this.usersRepo.findOneBy({id})
   if(!findUser) throw new NotFoundException("user not found")
    return findUser;
  }

 async update(id: string, updateUserDto: UpdateUserDto):Promise<User> {
    const findUser = await this.usersRepo.findOneBy({id})
    if(!findUser) throw new NotFoundException('user not found')
         findUser.socialMedia.fbUri = updateUserDto.socialMedia?.fbUri || undefined;
        findUser.socialMedia.twitterUri = updateUserDto.socialMedia?.twitterUri || undefined;

        return findUser;
      }


 async remove(id: string):Promise<User> {
  const findUser = await this.usersRepo.findOneBy({id})
  if(!findUser) throw new NotFoundException('user not found')
    await this.usersRepo.delete(id)
      return findUser
  }

queryUsers(paginationDtoStream: Observable<PaginationDto>): Observable<Users> {
  const resultSubject = new Subject<Users>();

  paginationDtoStream.subscribe({
    next: async (paginationDto) => {
      const { page, skip } = paginationDto;
      const offset = page * skip;

      // Fetch users with pagination
      const entities = await this.usersRepo.find({
        skip: offset,
        take: skip,
      });

      // Map entities to plain User objects
      const users: User[] = entities.map(entity => ({
        id: entity.id,
        username: entity.username,
        password: entity.password,
        age: entity.age,
        subscribed: entity.subscribed,
        socialMedia: entity.socialMedia,
      }));

      resultSubject.next({ users });
    },
    error: err => resultSubject.error(err),
    complete: () => resultSubject.complete()
  });

  return resultSubject.asObservable();
}
}
