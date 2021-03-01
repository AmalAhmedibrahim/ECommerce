import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key: string, isJson: boolean): any {
    let value = localStorage.getItem(key);
    value = value && isJson ? JSON.parse(value) : value;
    return value;
  }

  set(key: string, value: any, isJson: boolean): void {
    const val = value && isJson ? JSON.stringify(value) : value;
    localStorage.setItem(key, val);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

}
