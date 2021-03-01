import { Product } from 'src/modules/Shared/models/product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { APIService } from 'src/modules/Shared/services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private addProductURL: string = "api/product/addproduct";
  private ProductDetailsURL: string = "api/product/getproductbyid/";

  constructor(protected apiService: APIService) {
  }

  public addProduct(product: Product): Observable<Product> {

    return this.apiService.POST<Product>(this.addProductURL, product);
  }
  public getProductById(id: string): Observable<Product> {

    return this.apiService.Get<Product>(this.ProductDetailsURL + id);
  }
}
