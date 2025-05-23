import { PaymentEntity } from "src/entities/Payment";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dtos/CreatePaymentDto";
import { ClientProxy } from "@nestjs/microservices";
export declare class PaymentsService {
    private paymentRepo;
    private natsClient;
    constructor(paymentRepo: Repository<PaymentEntity>, natsClient: ClientProxy);
    createPayment({ userId, ...createPaymentDto }: CreatePaymentDto): Promise<PaymentEntity | null>;
}
