import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    displayName?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}