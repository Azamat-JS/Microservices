import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from '@app/common';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
    transport: Transport.GRPC,
    options: {
      protoPath: join(__dirname, '../auth.proto'),
      package: AUTH_PACKAGE_NAME
    }
  });
  await app.listen();
  Logger.log('Auth service is listening to gRPC...')
}
bootstrap();
