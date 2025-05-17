import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUserDto";
import { UsersService } from "./users.service";

@Controller()
export class UsersServiceController {
  constructor(private usersService: UsersService) {}

  @MessagePattern({ cmd: "createUser" })
  createUser(@Payload() data: CreateUserDto) {
    console.log(data);
    return this.usersService.createUser(data);
  }

  @MessagePattern({ cmd: "getUserById" })
  async getUserById(@Payload() data: any) {
    const { userId } = data;
    return await this.usersService.getUserById(userId);
  }

  @EventPattern("paymentCreated")
  paymentCreated(@Payload() data: any) {
    console.log(`payment-data received from users-service`, data);
  }
}
