

import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean | UrlTree {
    console.log('canActivate');
    if (localStorage.getItem('token') != null) {
      return true;
    }

    return this.router.parseUrl('/login');
  }
}
