import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'grpc',
      username: 'postgres',
      password: 'azamat998877',
      host: 'localhost',
      port: 5432,
      synchronize: true,
      autoLoadEntities: true,
      entities: [UserEntity]
    }),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AuthModule {}
