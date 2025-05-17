import { Module } from "@nestjs/common";
import { UsersServiceController } from "./users.controller";

@Module({
    imports: [],
    controllers: [UsersServiceController],
    providers: []
})

export class UsersModule {}