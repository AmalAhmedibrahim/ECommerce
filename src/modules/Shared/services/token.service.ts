import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string;
  authToken = 'token';
  UserName = 'name';
  constructor(private localStorage: LocalStorageService) { }

  getUserToken(): string {
    this.token = localStorage.authKey;
    return this.token;
  }
  setUserToken(token: string): void {
    this.localStorage.set(this.authToken, token, false);
  }
  setUserName(Name: string): void {
    this.localStorage.set(this.UserName, Name, false);
  }

  getUserName(): string {
    this.UserName = localStorage.name;
    return this.UserName;
  }
  CheckIfTokenExpire(tokenExpiration: number): boolean {
    var today = new Date();
    var expiryDate = new Date(today.getTime() + tokenExpiration * 1000);
    if (today > expiryDate)
      return true;
    else
      return false;
  }
  isAuthenticated(): Observable<boolean> {


    return interval().pipe(map(() => localStorage.token != null && !this.CheckIfTokenExpire(localStorage.TokenExpiration)),
      distinctUntilChanged()
    );
  }
}
