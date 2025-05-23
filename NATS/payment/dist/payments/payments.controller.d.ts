import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/CreatePaymentDto";
import { PaymentsService } from "./payments.service";
export declare class PaymentsServiceController {
    private natsClient;
    private paymentService;
    constructor(natsClient: ClientProxy, paymentService: PaymentsService);
    createPayment(data: CreatePaymentDto): Promise<void>;
}
