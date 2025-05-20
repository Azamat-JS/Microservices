import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('order-created')
  sendOrderCreatedNotification(@Payload() data:any){
    console.log('Notification service should send order created email', data)
  }

  @MessagePattern('payment-succed')
  sendPaymentSuccedNotification(@Payload() data:any){
    console.log(`Notification service should send payment succed email`, data)
  }
}
