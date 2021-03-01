import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addToCartURL: string = "api/cart/addtocart";

  constructor(protected apiService: APIService) { }


  public addToCart(productId: string): Observable<string> {

    return this.apiService.POST<string>(this.addToCartURL, productId);
  }
}
