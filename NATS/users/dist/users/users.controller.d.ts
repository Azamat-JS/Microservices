import { CreateUserDto } from "./dtos/CreateUserDto";
import { UsersService } from "./users.service";
export declare class UsersServiceController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(data: CreateUserDto): Promise<import("../entities/User").UserEntity>;
    getUserById(data: any): Promise<import("../entities/User").UserEntity | null>;
    paymentCreated(data: any): void;
}
