import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  static APIURL: string;
  static PasswordValidationPattern: string;
  static EmailValidationPattern: string;
  constructor(private http: HttpClient) { }
  load() {
    const jsonFile = 'assets/config/config.json';
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: any) => {

        ConfigService.APIURL = response.APIURL;
        ConfigService.PasswordValidationPattern = response.PasswordValidationPattern;
        ConfigService.EmailValidationPattern = response.EmailValidationPattern;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
