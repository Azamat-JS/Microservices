/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/notificaion/src/notificaion.controller.ts":
/*!********************************************************!*\
  !*** ./apps/notificaion/src/notificaion.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificaionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notificaion_service_1 = __webpack_require__(/*! ./notificaion.service */ "./apps/notificaion/src/notificaion.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let NotificaionController = class NotificaionController {
    notificaionService;
    constructor(notificaionService) {
        this.notificaionService = notificaionService;
    }
    getHello() {
        return this.notificaionService.getHello();
    }
    sendOrderCreatedEmail(order) {
        console.log(`Notification service: Sending order created email`, order);
    }
    paymentSuccedEmail(order) {
        console.log(`Notification service: Sending payment succed email`, order);
    }
};
exports.NotificaionController = NotificaionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], NotificaionController.prototype, "getHello", null);
__decorate([
    (0, microservices_1.MessagePattern)('order-created'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificaionController.prototype, "sendOrderCreatedEmail", null);
__decorate([
    (0, microservices_1.MessagePattern)('payment-succed'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificaionController.prototype, "paymentSuccedEmail", null);
exports.NotificaionController = NotificaionController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notificaion_service_1.NotificaionService !== "undefined" && notificaion_service_1.NotificaionService) === "function" ? _a : Object])
], NotificaionController);


/***/ }),

/***/ "./apps/notificaion/src/notificaion.module.ts":
/*!****************************************************!*\
  !*** ./apps/notificaion/src/notificaion.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificaionModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notificaion_controller_1 = __webpack_require__(/*! ./notificaion.controller */ "./apps/notificaion/src/notificaion.controller.ts");
const notificaion_service_1 = __webpack_require__(/*! ./notificaion.service */ "./apps/notificaion/src/notificaion.service.ts");
let NotificaionModule = class NotificaionModule {
};
exports.NotificaionModule = NotificaionModule;
exports.NotificaionModule = NotificaionModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [notificaion_controller_1.NotificaionController],
        providers: [notificaion_service_1.NotificaionService],
    })
], NotificaionModule);


/***/ }),

/***/ "./apps/notificaion/src/notificaion.service.ts":
/*!*****************************************************!*\
  !*** ./apps/notificaion/src/notificaion.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificaionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let NotificaionService = class NotificaionService {
    getHello() {
        return 'Hello World!';
    }
};
exports.NotificaionService = NotificaionService;
exports.NotificaionService = NotificaionService = __decorate([
    (0, common_1.Injectable)()
], NotificaionService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./apps/notificaion/src/main.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notificaion_module_1 = __webpack_require__(/*! ./notificaion.module */ "./apps/notificaion/src/notificaion.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(notificaion_module_1.NotificaionModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ["amqp://guest:guest@localhost:5672"],
            queue: "notification_queue",
            queueOptions: {
                durable: true
            }
        }
    });
    await app.listen();
    common_1.Logger.log(`Notification service is listening to RMQ`);
}
bootstrap();

})();

/******/ })()
;