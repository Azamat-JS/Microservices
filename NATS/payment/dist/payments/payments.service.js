"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Payment_1 = require("../entities/Payment");
const typeorm_2 = require("typeorm");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let PaymentsService = class PaymentsService {
    paymentRepo;
    natsClient;
    constructor(paymentRepo, natsClient) {
        this.paymentRepo = paymentRepo;
        this.natsClient = natsClient;
    }
    async createPayment({ userId, ...createPaymentDto }) {
        const user = await (0, rxjs_1.lastValueFrom)(this.natsClient.send({ cmd: 'getUserById' }, { userId }));
        console.log('user sent to users service');
        if (user) {
            const newPayment = await this.paymentRepo.create({
                ...createPaymentDto,
                user
            });
            console.log('user saved to database');
            return this.paymentRepo.save(newPayment);
        }
        return null;
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Payment_1.PaymentEntity)),
    __param(1, (0, common_1.Inject)("NATS_SERVICE")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        microservices_1.ClientProxy])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map