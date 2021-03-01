import { CommonService } from './../../Shared/services/common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Item } from 'src/modules/Shared/models/item';
import { Product } from 'src/modules/Shared/models/product';
import { ListingItemsService } from '../services/listing-items.service';

@Component({
  selector: 'app-listing-items',
  templateUrl: './listing-items.component.html',
  styleUrls: ['./listing-items.component.scss']
})
export class ListingItemsComponent implements OnInit {
  allCategories: Item[] = [];
  allTags: Item[] = [];
  allSortingFeatures: Item[] = [];
  allproducts: Product[] = [];
  constructor(public listingService: ListingItemsService, public commonService: CommonService, protected router: Router) { }

  ngOnInit() {
    const categories = this.commonService.GetAllCategories();
    const tags = this.commonService.GetAllTags();
    const sortingFeatures = this.commonService.GetAllSortingFeatures();
    const products = this.listingService.GetAllProducts();
    forkJoin([categories, tags, sortingFeatures, products]).subscribe(res => {
      this.allCategories = res[0];
      this.allTags = res[1];
      this.allSortingFeatures = res[2];
      this.allproducts = res[3];
    }, err => console.log(err));


  }

}
