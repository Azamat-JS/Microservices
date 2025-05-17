import { Module } from "@nestjs/common";
import { PaymentsServiceController } from "./payments.controller";

@Module({
    imports: [],
    controllers: [PaymentsServiceController],
    providers: []
})

export class PaymentsModule {};