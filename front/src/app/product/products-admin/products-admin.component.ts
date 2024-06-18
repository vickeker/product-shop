import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
  providers: [ProductService]
})
export class ProductsAdminComponent implements OnInit {
  products: Product[] = [];
  productService = inject(ProductService);
  constructor() {}

  onEdit = (product) => {
    this.productService.edit(product.id, product);
  }

  onDelete = (product) => {
    this.productService.delete(product.id);
  }

  async ngOnInit(): Promise<void> {
    this.productService.getProducts().subscribe((data: {data:Product[]}) => this.products = data.data);
  }

}
