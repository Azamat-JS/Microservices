import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getHello(): string {
    return this.notificationService.getHello();
  }

  @EventPattern('order-created')
  sendOrderCreatedEmail(@Payload() order:any){
    console.log(`Notification service: Sending order created email`, order)
  }

  @EventPattern('payment-succed')
  paymentSuccedEmail(@Payload() order:any){
    console.log(`Notification service: Sending payment succed email`, order)
  }
}
