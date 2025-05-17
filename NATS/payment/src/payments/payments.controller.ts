import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/CreatePaymentDto";
import { PaymentsService } from "./payments.service";

@Controller()
export class PaymentsServiceController {
  constructor(
    @Inject("NATS_SERVICE") private natsClient: ClientProxy,
    private paymentService: PaymentsService
  ) {}

  @EventPattern("createPayment")
  async createPayment(@Payload() data: CreatePaymentDto) {
    console.log(`payment received in payment-service`, data);
  const newPayment = await this.paymentService.createPayment(data);
   if(newPayment) this.natsClient.emit("paymentCreated", newPayment);
    console.log("and send to users service");
  }
}
