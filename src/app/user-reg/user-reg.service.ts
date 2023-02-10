import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

  constructor(private http:HttpClient) { }

  //http://localhost:9191/signup
  public register(user: User){
    return this.http.post("http://localhost:9191/signup",user,{responseType:'text' as 'json'});
  }

  public showProducts(){
    return this.http.get("http://localhost:9191/users");
  }
}
