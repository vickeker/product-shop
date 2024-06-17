
// User Interface
export interface IProduct {
    id: number
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number
  }

export class Product {
    id: number
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number

    constructor (product: IProduct) {
        this.id = product.id;
        this.code = product.code;
        this.name = product.name;
        this.description = product.description;
        this.image = product.image;
        this.price = product.price;
        this.category = product.category;
        this.quantity = product.quantity;
        this.inventoryStatus = product.inventoryStatus;
        this.rating = product.rating;
    }

}
