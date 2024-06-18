import fs from 'fs';

type WithId<T> = Omit<T, 'id'> & { id: number };

export class FileStorageClient<T extends { id?: number }> {
    private url: string;
    constructor(url: string) {
        this.url = url;
    }

    public getAll(): WithId<T>[] {
        const data = fs.readFileSync(this.url, 'utf8');
        return JSON.parse(data).data;
    }

    public get(id: number): WithId<T> {
        const file = fs.readFileSync(this.url, 'utf8');
        const data = JSON.parse(file).data;
        return data.find(d => d.id === id);
    }

    public create(object: T): WithId<T> {
        const data = this.getAll();
        const ids = data.map(d=>d.id);
        const maxId = Math.max(...ids);
        const newObject: WithId<T> = {
            id: maxId + 1,
            ...object
        };
        data.push(newObject);
        fs.writeFileSync(this.url, data.toString(), 'utf8');
        return newObject;
    }

    public update(id: number, object: Partial<T>): WithId<T> {
        const existingObject = this.get(id);
        const newObject = {
            ...existingObject,
            ...object
        };
        const data = this.getAll();
        const index = data.findIndex(d => d.id === id);
        data[index] = newObject;
        fs.writeFileSync(this.url, data.toString(), 'utf8');
        return newObject;
    }

    public replace(id: number, object: T): WithId<T> {
        const newObject = {
            ...object,
            id
        };
        const data = this.getAll();
        const index = data.findIndex(d => d.id === id);
        data[index] = newObject;
        fs.writeFileSync(this.url, data.toString(), 'utf8');
        return newObject;
    }

    public delete(id: number): void {
        const data = this.getAll();
        const index = data.findIndex(d => d.id === id);
        data.splice(index);
        fs.writeFileSync(this.url, data.toString(), 'utf8');
        return;
    }
}