import { Controller, Get, Inject, OnModuleInit, Param } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { PRODUCTS_PACKAGE_NAME, ProductServiceClient, PRODUCT_SERVICE_NAME } from "types/proto/products";

@Controller('product')
export class ProductController implements OnModuleInit{

    private productService: ProductServiceClient

    constructor(@Inject(PRODUCTS_PACKAGE_NAME) private client: ClientGrpc){}

    onModuleInit() {
        this.productService = this.client.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME);
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        const numId = parseInt(id)
        return this.productService.getProduct({productId: numId})
    }
}