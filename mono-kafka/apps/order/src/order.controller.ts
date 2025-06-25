import { Controller, Get, Inject } from '@nestjs/common';
import { OrderService } from './order.service';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka
  ) {}

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @EventPattern('order-created')
  newOrder(@Payload() order: any){
    console.log(order)
    this.kafkaClient.emit('payment-process',order)
  }
}
