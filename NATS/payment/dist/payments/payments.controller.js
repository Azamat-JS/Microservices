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
exports.PaymentsServiceController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const CreatePaymentDto_1 = require("./dtos/CreatePaymentDto");
const payments_service_1 = require("./payments.service");
let PaymentsServiceController = class PaymentsServiceController {
    natsClient;
    paymentService;
    constructor(natsClient, paymentService) {
        this.natsClient = natsClient;
        this.paymentService = paymentService;
    }
    async createPayment(data) {
        console.log(`payment received in payment-service`, data);
        const newPayment = await this.paymentService.createPayment(data);
        if (newPayment)
            this.natsClient.emit("paymentCreated", newPayment);
        console.log("and send to users service");
    }
};
exports.PaymentsServiceController = PaymentsServiceController;
__decorate([
    (0, microservices_1.EventPattern)("createPayment"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePaymentDto_1.CreatePaymentDto]),
    __metadata("design:returntype", Promise)
], PaymentsServiceController.prototype, "createPayment", null);
exports.PaymentsServiceController = PaymentsServiceController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)("NATS_SERVICE")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        payments_service_1.PaymentsService])
], PaymentsServiceController);
//# sourceMappingURL=payments.controller.js.map