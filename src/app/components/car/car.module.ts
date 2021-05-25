import { CarRoutingModule } from './car-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { LayoutModule } from './../../layout/layout.module';
import { CarComponent } from './car.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCarComponent } from './add-edit-car/add-edit-car.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CarComponent, AddEditCarComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CarRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
