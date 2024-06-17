import { Body, Controller, Delete, Get, Patch, Path, Post, Put, Route } from "tsoa";
import { Product } from "../models/products-model";
import { ProductCreateParams, ProductReplaceParams, ProductUpdateParams, ProductsService } from "../services/products-service";

interface ProductsResponse {
    data: Product[]
}
interface ProductResponse {
  data: Product
}

@Route("products")
export class ProductsController extends Controller {
  @Get("/")
  public async getProducts(): Promise<ProductsResponse> {
    const productService = new ProductsService();
    return {
      data: await productService.getProducts()
    }
  }

  @Post()
  public async createProduct(
    @Body() requestBody: ProductCreateParams
  ): Promise<ProductResponse> {
    const productService = new ProductsService();
    return {
      data: await productService.createProduct(requestBody)
    };
  }

  @Put("{productId}")
  public async replaceProduct(
    @Path() productId: number,
    @Body() requestBody: ProductReplaceParams
  ): Promise<ProductResponse> {
    const productService = new ProductsService();
    return {
      data: await productService.replaceProduct(productId, requestBody)
    };
  }

  @Patch("{productId}")
  public async updateProduct(
    @Path() productId: number,
    @Body() requestBody: ProductUpdateParams
  ): Promise<ProductResponse> {
    const productService = new ProductsService();
    return {
      data: await productService.updateProduct(productId, requestBody)
    };
  }

  
  @Delete("{productId}")
  public async deleteProduct(
    @Path() productId: number,
  ): Promise<void> {
    const productService = new ProductsService();
    return await productService.deleteProduct(productId);
  }
}
