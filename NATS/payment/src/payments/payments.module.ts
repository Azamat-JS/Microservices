import { Module } from "@nestjs/common";
import { PaymentsServiceController } from "./payments.controller";
import { NatsClientModule } from "src/nats-client/nats-client.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentEntity } from "src/entities/Payment";
import { PaymentsService } from "./payments.service";
import { UserEntity } from "src/entities/User";

@Module({
  imports: [TypeOrmModule.forFeature([PaymentEntity, UserEntity]), NatsClientModule],
  controllers: [PaymentsServiceController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
