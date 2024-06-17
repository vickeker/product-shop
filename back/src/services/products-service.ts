import { Product } from "../models/products-model";
import { SqlStorageService } from "./sql-storage-service";

export type ProductCreateParams = Pick<Product, "code" | "name" | "description" | "price" | "quantity" | "category" | "inventoryStatus" | "image" | "rating">;
export type ProductReplaceParams = ProductCreateParams;
export type ProductUpdateParams = Partial<ProductCreateParams>;

export class ProductsService {

  private db = new SqlStorageService<Omit<Product, "id"> & { id?: number }>('products');

  public async getProduct(id: number): Promise<Product> {
    return this.db.get(id);
  }
  
  public async getProducts(): Promise<Product[]> {
    return this.db.getAll();
  }
  
  public async createProduct(product: ProductCreateParams): Promise<Product> {
    return this.db.create(product);
  }

  public async updateProduct(id: number, product: ProductUpdateParams): Promise<Product> {
    return this.db.update(id, product)
  }

  public async replaceProduct(id: number, product: ProductReplaceParams): Promise<Product> {
    return this.db.replace(id, product)
  }

  public async deleteProduct(id: number): Promise<void> {
    return this.db.delete(id);
  }
}