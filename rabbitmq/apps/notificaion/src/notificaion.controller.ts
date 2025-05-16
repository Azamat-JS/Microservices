import { Controller, Get } from '@nestjs/common';
import { NotificaionService } from './notificaion.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificaionController {
  constructor(private readonly notificaionService: NotificaionService) {}

  @Get()
  getHello(): string {
    return this.notificaionService.getHello();
  }

  @MessagePattern('order-created')
  sendOrderCreatedEmail(@Payload() order:any){
    console.log(`Notification service: Sending order created email`, order)
  }

  @MessagePattern('payment-succed')
  paymentSuccedEmail(@Payload() order:any){
    console.log(`Notification service: Sending payment succed email`, order)
  }
}
