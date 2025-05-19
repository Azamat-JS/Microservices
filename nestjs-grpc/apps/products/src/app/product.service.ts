import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import {
  CreateProductDto,
  ProductResponse,
  Products,
  UpdataProductDto,
} from "types/proto/products";

@Injectable()
export class ProductMicroService {
  constructor(private readonly dbService: DatabaseService) {}

  async getProduct(productId: number): Promise<ProductResponse> {
    const product = await this.dbService.product.findUnique({
      where: { id: productId },
    });

    return {
      productId: product.id,
      name: product.name,
      price: product.price,
    };
  }

  async createProduct(dto: CreateProductDto): Promise<ProductResponse> {
    const product = await this.dbService.product.create({
      data: {
        name: dto.name,
        price: dto.price,
      },
    });

    return {
      productId: product.id,
      name: product.name,
      price: product.price,
    };
  }

  async findAllProducts(): Promise<Products> {
    const products = await this.dbService.product.findMany();

    return {
      users: products.map((product) => ({
        productId: product.id,
        name: product.name,
        price: product.price,
      })),
    };
  }

  async updateProduct(dto: UpdataProductDto): Promise<ProductResponse> {
    const product = await this.dbService.product.update({
      where: { id: dto.productId },
      data: {
        price: dto.price,
      },
    });

    return {
      productId: product.id,
      name: product.name,
      price: product.price,
    };
  }

  async deleteProduct(productId: number): Promise<ProductResponse> {
    const product = await this.dbService.product.delete({
      where: { id: productId },
    });

    return {
      productId: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
