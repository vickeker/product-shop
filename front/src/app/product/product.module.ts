import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductService } from './product.service';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [ProductsComponent, ProductsAdminComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TableModule,
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
  ],
  providers: [ProductService]
})
export class ProductModule { }
