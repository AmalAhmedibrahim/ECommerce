import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: 'src/modules/Auth/auth.module#AuthModule', canActivate: [] },
  { path: 'aboutus', loadChildren: 'src/modules/About-Us/about-us.module#AboutUsModule', canActivate: [] },
  { path: 'items', loadChildren: 'src/modules/listing-items/listing-items.module#ListingItemsModule', canActivate: [] },
  { path: 'products', loadChildren: 'src/modules/Product/product.module#ProductModule', canActivate: [] },
  { path: 'shoppingcart', loadChildren: 'src/modules/ShoppingCart/shopping-cart.module#ShoppingCartModule', canActivate: [] },
  { path: '', loadChildren: 'src/modules/listing-items/listing-items.module#ListingItemsModule', canActivate: [] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
