import { Controller } from "@nestjs/common";
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

@Controller()
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {

 async craeteProduct(request: CreateProductDto): Promise<ProductResponse> {
    return {
      productId: 1,
      name: "Phone",
      price: 13
    }
  }

 async getProduct(request: ProductRequest): Promise<ProductResponse> {
    return {
      productId: 1,
      name: "Phone",
      price: 13
    }
  }

 async findAllProducts(request: Empty): Promise<Products> {
    return {users: [
      {
      productId: 1,
      name: "Phone",
      price: 13
    },
    {
      productId: 1,
      name: "Phone",
      price: 13
    },
    {
      productId: 1,
      name: "Phone",
      price: 13
    }
    ] }
  }

 async updateProduct(request: UpdataProductDto): Promise<ProductResponse> {
    return {
  productId: 110,
      name: "Cat",
      price: 85
    }
  }

 async deleteProduct(request: ProductRequest): Promise<ProductResponse> {
    return {
      productId: 11,
      name: "Hat",
      price: 900
    }
  }
}
