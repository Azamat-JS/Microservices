import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NOTIFICATION_CLIENT, PAYMENT_CLIENT } from './constant';

@Module({
  imports: [
    ClientsModule.register([
        {
          name: PAYMENT_CLIENT,
          transport: Transport.RMQ,
          options: {
            urls: ["amqp://guest:guest@localhost:5672"],
            queue: "payment_queue",
            queueOptions: {
              durable: true,
            }
          }
        }
      ]),
    ClientsModule.register([
        {
          name: NOTIFICATION_CLIENT,
          transport: Transport.RMQ,
          options: {
            urls: ["amqp://guest:guest@localhost:5672"],
            queue: "notification_queue",
            queueOptions: {
              durable: true,
            }
          }
        }
      ])
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
