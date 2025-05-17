import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUserDto";


@Controller()
export class UsersServiceController {

    @MessagePattern({cmd: 'createUser'})
createUser(@Payload() data:CreateUserDto){
  console.log(data)
  return data;  
}
}