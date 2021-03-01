import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingItemsComponent } from './components/listing-items.component';


const routes: Routes = [
  { path: '', component: ListingItemsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingItemsRoutingModule { }
