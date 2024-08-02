# Victor Scheidecker - Tech Lead / Fullstack Senior Engineer

## Product Shop Project

This project's goal is to show my knowledge in creating a full-stack app with Angular/Node/Typescript.
For the purpose of this assignment I have decided to focus on the backend.
The API is build from scratch with Node, Express and Swagger and can support Sql, NoSql or File storage through 3 distinct clients.
API can be tested and the documentation is available using Swagger.
The Front-end app was modify to show how the API is being used and display some of the data.

Feel free to send me questions at vscheidecker@gmail.com.

Victor Scheidecker

### Front-end
Setup: `/front`
1. Prerequisite: NPM, Angular
2. `npm install`
3. Configure API url in `front\src\app\product\product.service.ts`. Default url is `http://localhost:3000`.
3. `npm run build`
4. `npm run start`
5. App available at http://localhost:4200

### Back-end
Setup: `/back`
1. Prerequisite: NPM, Node
2. Configure your database type and change the StorageClient accordingly in `back\src\services\products-service.ts` 
 - Sql (sqlite3): Memory db, package already part of the dependencies
 ```
 # back\src\services\products-service.ts
  private db = new SqlStorageClient<Omit<Product, "id"> & { id?: number }>('products');
 ```
 - NoSql: install MongoDB, and configure connection in `back\src\clients\nosql-storage.ts`
 ```
  # back\src\services\products-service.ts
  private db = new NoSqlStorageClient<Omit<Product, "id"> & { id?: number }>('products');
```
```
   # back\src\clients\nosql-storage.ts
   mongoose.connect('mongodb://127.0.0.1:27017/shop');
 ```
 - File storage
```
 # back\src\services\products-service.ts
private db = new FileStorageClient<Omit<Product, "id"> & { id?: number }>('./src/assets/products.json');
 ```
3. Initial data is seeded on build from `./src/assets/products.json`
3. `npm install`
4. `npm run dev`
5. API available at http://localhost:3000

### API documentation (Swagger)
1. `npm install`
2. `npm run dev`
3. doc available at http://localhost:3000/docs

