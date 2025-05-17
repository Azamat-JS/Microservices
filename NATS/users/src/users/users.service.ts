import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/CreateUserDto";


@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private usersRepo: Repository<UserEntity>){}

   async createUser(createUserDto: CreateUserDto){
        const newUser = await this.usersRepo.create(createUserDto);
        return this.usersRepo.save(newUser)
    }

    getUserById(userId:string){
        return this.usersRepo.findOne({where: {id: userId}, relations:['payments']})
    }
}