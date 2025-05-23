import { ClientProxy } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUserDto";
export declare class UsersController {
    private natsClient;
    constructor(natsClient: ClientProxy);
    createUser(createUserDto: CreateUserDto): import("rxjs").Observable<any>;
    getUserById(id: string): Promise<any>;
}
