import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { KAFKA_SERVICE } from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject(KAFKA_SERVICE) private readonly clientKafka: ClientKafka
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('order-created')
  handleOrderCreated(@Payload() order: any){
    console.log("Order service received new order", order);
    this.clientKafka.emit('process-payment', order)
  }
}
