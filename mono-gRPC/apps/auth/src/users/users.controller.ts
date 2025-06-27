import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserServiceController, CreateUserDto, UpdateUserDto, UserServiceControllerMethods, FindOneUserDto, PaginationDto, Users, Empty } from '@app/common';
import { Observable } from 'rxjs';


@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController{
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

findAllUsers(_: Empty): Promise<Users> {
  return this.usersService.findAll().then(entities => ({
    users: entities.map(entity => ({
      id: entity.id,
      username: entity.username,
      password: entity.password,
      age: entity.age,
      subscribed: entity.subscribed,
      socialMedia: entity.socialMedia,
    })),
  }));
}

  findOneUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.findOne(findOneUserDto.id);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(findOneUserDto.id);
  }

  queryUsers(paginationDtoStream: Observable<PaginationDto>){
    return this.usersService.queryUsers(paginationDtoStream)
  }
}
