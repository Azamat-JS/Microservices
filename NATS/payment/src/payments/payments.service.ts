import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentEntity } from "src/entities/Payment";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dtos/CreatePaymentDto";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { UserEntity } from "src/entities/User";

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepo: Repository<PaymentEntity>,

    @Inject("NATS_SERVICE") private natsClient: ClientProxy,
  ) {}

  async createPayment({userId, ...createPaymentDto}: CreatePaymentDto) {
    const user = await lastValueFrom<UserEntity>(this.natsClient.send({cmd: 'getUserById'}, {userId}))
    console.log('user sent to users service');
    if(user){
        const newPayment = await this.paymentRepo.create({
            ...createPaymentDto,
        user});
        console.log('user saved to database');
        return this.paymentRepo.save(newPayment);
    }
    return null;
  }
}
