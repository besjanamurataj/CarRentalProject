import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location/location.component';
import { AddEditLocationComponent } from './add-edit-location/add-edit-location.component';
import { LayoutLocationComponent } from './layout-location/layout-location.component';


@NgModule({
  declarations: [
    LocationComponent,
    AddEditLocationComponent,
    LayoutLocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    SharedModule
  ]
})
export class LocationModule { }
