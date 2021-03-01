import { TokenService } from 'src/modules/Shared/services/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  rootURL: string = "";
  token: string = "";

  constructor(private http: HttpClient, private tokenService: TokenService) {

    this.rootURL = ConfigService.APIURL;

  }

  Get<T>(URL: string): Observable<T> {
    var headers = new HttpHeaders({
      'Accept-Language': 'en-US',
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache'
    });
    if (this.tokenService.getUserToken()) {
      headers = headers.append('Authorization', `Bearer ${this.tokenService.getUserToken()}`);
    }
    var httpOptions = {
      headers: headers
    }
    // if(url.startsWith("http"))
    // return this.http.get<T>(url, httpOptions).pipe();
    // else
    return this.http.get<T>(this.rootURL + URL, httpOptions).pipe();
  }

  POST<T>(URL: string, body: any): Observable<T> {
    var headers = new HttpHeaders({
      'Accept-Language': 'en-US',
      'Content-type': "application/json"
    });

    if (this.tokenService.getUserToken()) {
      headers = headers.append('Authorization', `Bearer ${this.tokenService.getUserToken()}`);
    }

    var httpOptions = {
      headers: headers
    };
    // if(URL.startsWith("http"))
    // return this.http.post<T>(url, body, httpOptions).pipe();
    // else
    return this.http.post<T>(this.rootURL + URL, body, httpOptions).pipe();
  }
}
