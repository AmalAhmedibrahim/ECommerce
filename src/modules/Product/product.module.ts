import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [AddProductComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
