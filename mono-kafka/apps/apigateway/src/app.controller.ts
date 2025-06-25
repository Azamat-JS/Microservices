import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('order')
  order(@Body() order: any){
    this.kafkaClient.emit('order-created', order)
    return {msg: 'order created', order}
  }
}
