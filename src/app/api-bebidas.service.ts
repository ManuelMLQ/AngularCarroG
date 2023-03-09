import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiBebidasService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://restcountries.com/v2/all?limit=1');
  }
}
