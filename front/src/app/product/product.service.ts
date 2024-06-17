import { Injectable, inject } from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly apiUrl = 'http://localhost:3000/products';

  private http = inject(HttpClient);

  constructor() { }


  getProducts(): Observable<{data: IProduct[]}> {
    return this.http.get<{data: IProduct[]}>(this.apiUrl);
  }

  edit(id: string, product): Observable<{data: IProduct}> {
    return this.http.patch<{data: IProduct}>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
