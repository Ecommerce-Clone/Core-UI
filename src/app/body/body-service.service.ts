import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BodyService {
  constructor(private http: HttpClient) {}
  fetchData(endpoint: string): Observable<any> {
    return this.http.get('assets/data/raw_data/' + endpoint);
  }
}
