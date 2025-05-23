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
exports.UsersServiceController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const CreateUserDto_1 = require("./dtos/CreateUserDto");
const users_service_1 = require("./users.service");
let UsersServiceController = class UsersServiceController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(data) {
        console.log(data);
        return this.usersService.createUser(data);
    }
    async getUserById(data) {
        const { userId } = data;
        return await this.usersService.getUserById(userId);
    }
    paymentCreated(data) {
        console.log(`payment-data received from users-service`, data);
    }
};
exports.UsersServiceController = UsersServiceController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createUser" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersServiceController.prototype, "createUser", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getUserById" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersServiceController.prototype, "getUserById", null);
__decorate([
    (0, microservices_1.EventPattern)("paymentCreated"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersServiceController.prototype, "paymentCreated", null);
exports.UsersServiceController = UsersServiceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersServiceController);
//# sourceMappingURL=users.controller.js.map