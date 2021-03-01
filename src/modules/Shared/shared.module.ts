import { CartService } from './services/cart.service';
import { AlertifyService } from './services/alertify.service';
import { CommonService } from './services/common.service';
import { PagingModule } from './paging/paging.module';
import { ItemsModule } from './items/items.module';
import { FiltersModule } from './filters/filters.module';
import { APIService } from './services/api-service.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const providers = [
  APIService,
  CommonService,
  AlertifyService,
  CartService
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FiltersModule,
    ItemsModule,
    PagingModule,

  ],
  providers: [...providers]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...providers
      ]
    };
  }
}
