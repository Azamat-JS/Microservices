import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/CreatePaymentDto";
export declare class PaymentsController {
    private natsClient;
    constructor(natsClient: ClientProxy);
    createPayment(createPaymentDto: CreatePaymentDto): void;
}
