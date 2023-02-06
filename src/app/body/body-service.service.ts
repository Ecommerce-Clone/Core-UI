import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodyServiceService {

  constructor(private http:HttpClient) { }
  fetchProducts():Observable<any> {
    return this.http.get("src/assets/product.json");
  }
}
