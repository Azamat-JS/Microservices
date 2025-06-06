"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let ProdService = class ProdService {
    async findAll() {
        const response = await axios_1.default
            .get(`https://reqres.in/api/users`, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
            .then((res) => res.data);
        console.log('this from api');
        return response;
    }
};
exports.ProdService = ProdService;
exports.ProdService = ProdService = __decorate([
    (0, common_1.Injectable)()
], ProdService);
//# sourceMappingURL=prod.service.js.map