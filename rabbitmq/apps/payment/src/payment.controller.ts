import { Controller, Get, Inject } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_CLIENT } from './constants';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService,
    @Inject(NOTIFICATION_CLIENT) private readonly notificationClient: ClientProxy
  ) {}

  @Get()
  getHello(): string {
    return this.paymentService.getHello();
  }

  @MessagePattern("process-payment")
  handleProcessPayment(@Payload() order: any){
    console.log(`Payment service in process`, order)
    this.notificationClient.emit("payment-succed", order)
  }
}
