import { Controller, Get, Inject } from '@nestjs/common';
import { OrderService } from './order.service';
import { ClientProxy, EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_CLIENT, PAYMENT_CLIENT } from './constant';

const orders = [
  {
  orderId: 1,
  product: 'apple'
},
  {
  orderId: 2,
  product: 'lemon'
},
  {
  orderId: 3,
  product: 'banana'
},
  {
  orderId: 4,
  product: 'pear'
},
]

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService,

    @Inject(PAYMENT_CLIENT) private readonly paymentMQClient: ClientProxy,
    @Inject(NOTIFICATION_CLIENT) private readonly notificationMQClient: ClientProxy
  ) {}

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @EventPattern("order-created")
  handleOrderCreated(@Payload() order:any){
    console.log('Order service received new order: ', order);
    this.paymentMQClient.emit("process-payment", order);
    this.notificationMQClient.emit("order-created", order);
  }
}
