import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AddEditTransmisionComponent } from './add-edit-transmision/add-edit-transmision.component';
import { TransmitionRoutingModule } from './transmition-routing.module';
import { TransmisionTypeComponent } from './transmision-type.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LayoutComponent,
    AddEditTransmisionComponent,
    TransmisionTypeComponent
  ],
  imports: [
    CommonModule,
    TransmitionRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class TransmisionModule { }
