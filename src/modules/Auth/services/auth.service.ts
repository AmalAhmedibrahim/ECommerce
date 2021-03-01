import { User } from './../../Shared/models/user';
import { Observable } from 'rxjs';
import { APIService } from './../../Shared/services/api-service.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'api/auth/login';
  private registerUrl = 'api/auth/login';

  constructor(private apiService: APIService) { }


  login(user: User): Observable<string> {

    return this.apiService.POST(this.loginUrl, user);
  }

  register(user: User): Observable<string> {

    return this.apiService.POST(this.registerUrl, user);
  }

}
