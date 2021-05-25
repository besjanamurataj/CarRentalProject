import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class AccountModule { }
