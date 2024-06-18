import { Product, ProductCreateParams, ProductReplaceParams, ProductUpdateParams } from "../models/products-model";
import { SqlStorageClient } from "../clients/sql-storage";

export class ProductsService {

  private db = new SqlStorageClient<Omit<Product, "id"> & { id?: number }>('products');

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