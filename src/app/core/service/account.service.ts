import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {
  }
  login(username: string, password: string) {
    return this.http
      .post<Login>(`${environment.loginApi}`, { username, password })
      .pipe(
        map((user) => {
          if (user && user.token) {
            localStorage.setItem(`token`,user.token)
          }
          return user;
        })
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
