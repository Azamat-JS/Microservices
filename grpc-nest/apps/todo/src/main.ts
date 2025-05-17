import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TodoModule,{
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../todo.proto'),
        package: 'todo',
        url: '127.0.0.1:5000',
      }
    });
  await app.listen();
  Logger.log('Todo service is running')
}
bootstrap();
