import { NestFactory } from '@nestjs/core';
import { PaymentModule } from './payment.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(PaymentModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ["amqp://guest:guest@localhost:5672"],
        queue: "payment_queue",
        queueOptions: {
          durable:true
        }
      }
    }
  );
  await app.listen();
  Logger.log(`Payment service is listening to RMQ`)
}
bootstrap();
