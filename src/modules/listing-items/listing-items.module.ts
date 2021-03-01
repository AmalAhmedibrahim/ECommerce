import { PagingModule } from './../Shared/paging/paging.module';
import { ItemsModule } from './../Shared/items/items.module';
import { FiltersModule } from './../Shared/filters/filters.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingItemsRoutingModule } from './listing-items-routing.module';
import { ListingItemsComponent } from './components/listing-items.component';
@NgModule({
  declarations: [ListingItemsComponent],
  imports: [
    CommonModule,
    ListingItemsRoutingModule,
    FiltersModule,
    ItemsModule,
    PagingModule
  ]
})
export class ListingItemsModule { }
