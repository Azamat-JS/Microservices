import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { NotificaionModule } from './notificaion.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(NotificaionModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ["amqp://guest:guest@localhost:5672"],
        queue: "notification_queue",
        queueOptions: {
          durable:true
        }
      }
    }
  );
  await app.listen();
  Logger.log(`Notification service is listening to RMQ`)
}
bootstrap();