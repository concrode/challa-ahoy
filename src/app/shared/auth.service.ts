import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_API:string = 'http://localhost:8080/auth/';

  constructor(private http: HttpClient,
              private router: Router) {}

  logoutUser() {
    this.clearToken();
    this.router.navigate(['/login']);
  }

  clearToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  login(user): Observable<any> {
    return this.http.post(this.AUTH_API + 'login', user, httpOptions);
  }

}
