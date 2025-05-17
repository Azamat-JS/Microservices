import { Module } from "@nestjs/common";
import { UsersServiceController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/User";
import { PaymentEntity } from "src/entities/Payment";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, PaymentEntity])],
    controllers: [UsersServiceController],
    providers: [UsersService]
})

export class UsersModule {}