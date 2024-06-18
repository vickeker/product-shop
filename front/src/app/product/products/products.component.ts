import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  productService = inject(ProductService);

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

  constructor() {
   }

  async ngOnInit(): Promise<void> {
    this.productService.getProducts().subscribe((data: {data: Product[];}) => {
        return this.products = data.data;
      });
  }

}
