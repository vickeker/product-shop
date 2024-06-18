import mongoose, { Schema, Model } from 'mongoose';
import { Product } from '../models/products-model';

mongoose.connect('mongodb://127.0.0.1:27017/products');

const ProductSchema = new Schema({
    id: Number,
    code: String,
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    inventoryStatus: String,
    category: String,
    image: String,
    rating: Number,
  });
const Product = mongoose.model<Product>('Product', ProductSchema, 'products');

const models = {
    'products': Product,
};

type WithId<T> = Omit<T, 'id'> & { id: number };

export class NoSqlStorageClient<T extends { id?: number }> {

    private Model: Model<unknown>;

    constructor(table: string) {
        this.Model = models[table];
    }

    public async getAll(): Promise<WithId<T>[]> {
        return this.Model.find();
    }

    public async get(id: number): Promise<WithId<T>> {
        return this.Model.findOne({id});
    }

    public async create(object: T): Promise<WithId<T>> {
        return (await this.Model.create(object)).toObject();
    }

    public async update(id: number, object: Partial<T>): Promise<WithId<T>> {
        return this.Model.findOneAndUpdate({id}, object);
    }

    public async replace(id: number, object: T): Promise<WithId<T>> {
        return this.Model.findOneAndReplace({id}, object);
    }

    public async delete(id: number): Promise<void> {
        return this.Model.deleteOne({id}).then(() => {return;});
    }
}