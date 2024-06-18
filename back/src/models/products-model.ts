export interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    inventoryStatus: string;
    category: string;
    image?: string;
    rating?: number;
}

export type ProductCreateParams = Pick<Product, "code" | "name" | "description" | "price" | "quantity" | "category" | "inventoryStatus" | "image" | "rating">;
export type ProductReplaceParams = ProductCreateParams;
export type ProductUpdateParams = Partial<ProductCreateParams>;
