
import { SharedModule } from './../../shared/shared.module';
import { AddEditBrandComponent } from './add-edit-brand/add-edit-brand.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandRoutingModule } from './brand-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { BrandComponent } from './brand.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BrandComponent,AddEditBrandComponent,LayoutComponent],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BrandModule { }
