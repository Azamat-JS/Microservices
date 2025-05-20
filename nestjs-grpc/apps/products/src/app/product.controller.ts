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
    console.log(request);
    return {
      productId: 100,
      ...request,
    };
  }

  async getProduct(request: ProductRequest): Promise<ProductResponse> {
    return {
      productId: 1,
      name: "Phone",
      price: 13,
    };
  }

  async findAllProducts(request: Empty): Promise<Products> {
    return {
      products: [
        {
          productId: 1,
          name: "Phone",
          price: 13,
        },
        {
          productId: 1,
          name: "Phone",
          price: 13,
        },
        {
          productId: 1,
          name: "Phone",
          price: 13,
        },
      ],
    };
  }

  async updateProduct(request: UpdataProductDto): Promise<ProductResponse> {
    console.log(request);
    return {
      ...request,
      name: "Cat",
    };
  }

  async deleteProduct(request: ProductRequest): Promise<ProductResponse> {
    console.log(request)
    return {
      productId: request.productId,
      name: "Phone",
      price: 13,
    };
  }
}
