import { Product } from 'src/modules/Shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/modules/Shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(public productService: ProductService, private activatedRoute: ActivatedRoute, public cartService: CartService) {
    this.product = {
      name: '', originalPrice: null, SalePrice: null, imageURL: "", description: "",
      paymentTypes: [], category: "", tags: [], onSale: true
    };
    this.product._id = this.activatedRoute.snapshot.paramMap.get("id");

  }

  ngOnInit() {
    this.productService.getProductById(this.product._id).subscribe(res => {
      this.product = res[0];
    });
  }
  addToCart() {
    debugger;
    this.cartService.addToCart(this.product._id).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
