import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";


@Controller()
export class UsersServiceController {

    @MessagePattern({cmd: 'createUser'})
createUser(){

}
}