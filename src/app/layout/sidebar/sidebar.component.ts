import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { items } from './items.constant';
import { SidebarItems } from './sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public sidebarShow: boolean = false;
  navbarOpen = false;


items:Array<SidebarItems> = items;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
