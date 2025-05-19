import { Controller } from "@nestjs/common";
import { Observable } from "rxjs";
import {
  CreateProductDto,
  Empty,
  ProductRequest,
  ProductResponse,
  Products,
  ProductServiceController,
  ProductServiceControllerMethods,
  UpdataProductDto,
} from "types/proto/products";
import { ProductMicroService } from "./product.service";

@Controller("product")
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  constructor(private readonly productMicroService: ProductMicroService) {}

  craeteProduct(request: CreateProductDto): Promise<ProductResponse> {
    return this.productMicroService.createProduct(request);
  }

  getProduct(request: ProductRequest): Promise<ProductResponse> {
    return this.productMicroService.getProduct(request.productId);
  }

  findAllProducts(request: Empty): Promise<Products> {
    return this.productMicroService.findAllProducts();
  }

  updateProduct(request: UpdataProductDto): Promise<ProductResponse> {
    return this.productMicroService.updateProduct(request);
  }

  deleteProduct(request: ProductRequest): Promise<ProductResponse> {
    return this.productMicroService.deleteProduct(request.productId);
  }
}
