import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/CreatePaymentDto";

@Controller()
export class PaymentsServiceController {
    @EventPattern('createPayment')
    createPayment(@Payload() data:CreatePaymentDto){
        console.log(data)
    }
}