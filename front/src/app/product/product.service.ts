import { Injectable, inject } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly apiUrl = 'http://localhost:3000/products';

  private http = inject(HttpClient);

  constructor() { }


  getProducts(): Observable<{data: Product[]}> {
    return this.http.get<{data: Product[]}>(this.apiUrl);
  }

  edit(id: string, product): Observable<{data: Product}> {
    return this.http.patch<{data: Product}>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
