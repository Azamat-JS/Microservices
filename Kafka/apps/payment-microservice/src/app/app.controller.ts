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

  @MessagePattern('process-payment')
  processPayment(@Payload() data:any){
    console.log('Payment service in process', data);
    this.clientKafka.emit("payment-succed", data)
  }
}
