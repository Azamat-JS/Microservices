import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import {  ClientProxy } from '@nestjs/microservices';
import { ORDER_SERVICE_RABBITMQ } from './constants';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService,
    @Inject(ORDER_SERVICE_RABBITMQ)  private readonly client: ClientProxy
  ) {}

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Post("order")
  createOrder(@Body() order: any) {
    this.client.emit("order-created", order)
    console.log('Order created in api-gateway')    
    return { message: 'Order received', order };
  }
  
}
