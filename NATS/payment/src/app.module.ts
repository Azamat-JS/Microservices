import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { NatsClientModule } from './nats-client/nats-client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PaymentEntity } from './entities/Payment';
import { UserEntity } from './entities/User';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, envFilePath: '.env'}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
      entities: [PaymentEntity, UserEntity],
      synchronize:true
    }),
    PaymentsModule, NatsClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
