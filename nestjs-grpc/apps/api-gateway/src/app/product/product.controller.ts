import { Body, Controller, Delete, Get, Inject, OnModuleInit, Param, Post, Put } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { PRODUCTS_PACKAGE_NAME, ProductServiceClient, PRODUCT_SERVICE_NAME, CreateProductDto, UpdataProductDto } from "types/proto/products";

@Controller('product')
export class ProductController implements OnModuleInit{

    private productService: ProductServiceClient

    constructor(@Inject(PRODUCTS_PACKAGE_NAME) private client: ClientGrpc){}

    onModuleInit() {
        this.productService = this.client.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME);
    }

    @Post()
    createProduct(@Body() createProductDto: CreateProductDto){
        return this.productService.craeteProduct(createProductDto)
    }

    @Get('many')
    findAll(){
        return this.productService.findAllProducts({})
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        const numId = parseInt(id)
        return this.productService.getProduct({productId: numId})
    }

    @Put('update')
    updateProduct(@Body() updateProductDto: UpdataProductDto){
        console.log(updateProductDto)
        return this.productService.updateProduct(updateProductDto)
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') id: number){
        return this.productService.deleteProduct({productId: id})
    }
}