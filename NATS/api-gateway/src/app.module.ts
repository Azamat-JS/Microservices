import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, envFilePath:'.env'}),
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ["nats://nats"],
        }
      }
    ]), UsersModule, PaymentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {};
