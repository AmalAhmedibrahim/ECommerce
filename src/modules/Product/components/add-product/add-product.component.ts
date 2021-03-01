import { ProductService } from './../../services/product.service';
import { CommonService } from './../../../Shared/services/common.service';
import { Item } from './../../../Shared/models/item';
import { Product } from 'src/modules/Shared/models/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { AlertifyService } from 'src/modules/Shared/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('addProductForm', { static: true }) productForm: NgForm;

  product: Product;
  categories: Item[];
  tags: Item[];
  paymentTypes: Item[];
  submit: boolean;

  constructor(public commonService: CommonService, public productService: ProductService, private alertifyService: AlertifyService, protected router: Router) {
    this.product = {
      name: '', originalPrice: null, SalePrice: null, imageURL: "", description: "",
      paymentTypes: [], category: "", tags: [], onSale: true
    }
    this.submit = false;
  }

  ngOnInit() {

    const categories = this.commonService.GetAllCategories();
    const tags = this.commonService.GetAllTags();
    const paymentTypes = this.commonService.GetPaymentTypes();

    forkJoin([categories, tags, paymentTypes]).subscribe(res => {
      this.categories = res[0];
      this.tags = res[1];
      this.paymentTypes = res[2];

    }, err => console.log(err));
  }
  onSubmit() {

    this.submit = true;
    if (this.productForm.valid && this.product.paymentTypes.length > 0 && this.product.tags.length > 0) {
      this.product.imageURL = "./assets/img/products/product-grey-9.jpg";
      this.productService.addProduct(this.product).subscribe(res => {

        console.log(res);
        this.alertifyService.success("product added Successfully");
        this.router.navigate([`/items`]);
      }, err => console.log(err));
    }
  }
  onPaymentTypesChange(event) {

    if (event.target.checked) {
      this.product.paymentTypes.push(event.target.value);
    } else {
      let index = this.product.paymentTypes.findIndex(t => t === event.target.value);
      if (index != -1) {
        this.product.paymentTypes.splice(index);
      }
    }
  }
  onTagAdded(tagtxt: HTMLInputElement) {
    this.product.tags.push(tagtxt.value);
    tagtxt.value = "";

  }
  onTagRemoved(index: number) {
    this.product.tags.splice(index);
  }
  onClearTag() {
    this.product.tags = [];
  }

}
