import { Item } from './../../Shared/models/item';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from 'src/modules/Shared/services/api-service.service';
import { Product } from 'src/modules/Shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ListingItemsService {
  private productsURL: string = 'api/product/getallproducts';
  constructor(protected apiService: APIService) {
  }


  GetAllProducts(): Observable<Product[]> {
    return this.apiService.Get<Product[]>(this.productsURL);
  }
}
