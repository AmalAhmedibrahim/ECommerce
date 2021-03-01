import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about';
import { Item } from '../models/item';
import { APIService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private categoriesURL: string = 'api/common/getallcategories';
  private tagsURL: string = 'api/common/getalltags';
  private sortingURL: string = 'api/common/getallsortingfeatures';
  private PaymentTypesURL: string = 'api/common/getpaymenttypes';
  private AboutURL: string = 'api/common/about';


  constructor(protected apiService: APIService) { }

  GetAllCategories(): Observable<Item[]> {
    return this.apiService.Get<Item[]>(this.categoriesURL);
  }
  GetAllTags(): Observable<Item[]> {
    return this.apiService.Get<Item[]>(this.tagsURL);
  }
  GetAllSortingFeatures(): Observable<Item[]> {
    return this.apiService.Get<Item[]>(this.sortingURL);
  }
  GetPaymentTypes(): Observable<Item[]> {
    return this.apiService.Get<Item[]>(this.PaymentTypesURL);
  }
  GetAbout(): Observable<About> {
    return this.apiService.Get<About>(this.AboutURL);
  }
}
