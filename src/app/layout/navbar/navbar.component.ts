import { Router } from '@angular/router';
import { AccountService } from './../../core/service/account.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService:AccountService, private router:Router,) { }

  ngOnInit(): void {
  }
  logout(){
     this.accountService.logout();
    this.router.navigate(['/']);
  }










}
