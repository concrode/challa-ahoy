import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8080/api/register";
  private _loginUrl = "http://localhost:8080/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    this.data = '0';

    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  data:string;
  loggedIn() {
    console.log("loggedIn():" + this.data);
    if (this.data == '1') {
      return true;
    }  
    //return !!localStorage.getItem('token')    
  }

  setData(data){
    this.data = data;
  }


}
