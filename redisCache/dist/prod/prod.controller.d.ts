import { ProdService } from './prod.service';
export declare class ProdController {
    private readonly prodService;
    constructor(prodService: ProdService);
    findAll(): Promise<any>;
}
