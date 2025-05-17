import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/CreatePaymentDto";

@Controller("payments")
export class PaymentsController {
  constructor(@Inject("NATS_SERVICE") private natsClient: ClientProxy) {}

  @Post()
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    console.log("payment sent from api-gateway");
    this.natsClient.emit("createPayment", createPaymentDto);
  }
}
