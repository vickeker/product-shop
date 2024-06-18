import fs from 'fs';

console.log('Using SQL client');
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
  });
const createSqlDb = (table) => {
    return knex.schema.hasTable(table).then((exists) => {
        if (!exists) {
          return knex.schema.createTable(table, function (t) {
            t.increments('id').primary();
            t.string('code', 100);
            t.string('name', 100);
            t.string('description', 100);
            t.string('image', 100);
            t.decimal('price');
            t.string('category', 100);
            t.integer('quantity');
            t.string('inventoryStatus', 100);
            t.integer('rating');
          }).then(() => {
            // seed initial data from file
            console.log('Seeding...(upsert)');
            const data = fs.readFileSync('./src/assets/products.json', {encoding:'utf8'});
            const products = JSON.parse(data);  
            return knex(table).insert(products.data);
          }).catch(err => {
            console.log('err', err);
          }) ;
        }            
        return;
      });
}

type WithId<T> = Omit<T, 'id'> & { id: number };

export class SqlStorageClient<T extends { id?: number }> {

    private table: string;

    constructor(table: string) {
        this.table = table;
    }

    public async getAll(): Promise<WithId<T>[]> {
        await createSqlDb(this.table);
        return knex(this.table).select();
    }

    public async get(id: number): Promise<WithId<T>> {
        await createSqlDb(this.table);
        return knex.select().from(this.table).where('id', id);
    }

    public async create(object: T): Promise<WithId<T>> {
        await createSqlDb(this.table);
        return knex(this.table).insert(object, ['*']);
    }

    public async update(id: number, object: Partial<T>): Promise<WithId<T>> {
        await createSqlDb(this.table);
        return knex(this.table).where('id', id).update(object, ['*']);
    }

    public async replace(id: number, object: T): Promise<WithId<T>> {
        await createSqlDb(this.table);
        return knex(this.table).where('id', id).update(object, ['*']);
    }

    public async delete(id: number): Promise<void> {
        await createSqlDb(this.table);
        return knex(this.table).where('id', id).del();
    }
}