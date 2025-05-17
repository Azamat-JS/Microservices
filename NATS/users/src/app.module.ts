import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NatsClientModule } from './nats-client/nats-client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './entities/User';
import { PaymentEntity } from './entities/Payment';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, envFilePath: '.env'}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.POSTGRES_DB,
      host: 'postgres_db',
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
      entities: [UserEntity, PaymentEntity],
      synchronize:true
    }),
    UsersModule, NatsClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
