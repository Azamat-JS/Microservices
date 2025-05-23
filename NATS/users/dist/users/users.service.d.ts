import { UserEntity } from "src/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/CreateUserDto";
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    getUserById(userId: string): Promise<UserEntity | null>;
}
