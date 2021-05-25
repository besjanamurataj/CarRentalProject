
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidebarComponent
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
