
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidebarComponent,
    HomeComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports:[
    SidebarComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
