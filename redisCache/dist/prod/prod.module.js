"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdModule = void 0;
const common_1 = require("@nestjs/common");
const prod_service_1 = require("./prod.service");
const prod_controller_1 = require("./prod.controller");
const cache_manager_1 = require("@nestjs/cache-manager");
const core_1 = require("@nestjs/core");
let ProdModule = class ProdModule {
};
exports.ProdModule = ProdModule;
exports.ProdModule = ProdModule = __decorate([
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register({
                ttl: 7000
            })],
        controllers: [prod_controller_1.ProdController],
        providers: [prod_service_1.ProdService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: cache_manager_1.CacheInterceptor
            }
        ],
    })
], ProdModule);
//# sourceMappingURL=prod.module.js.map