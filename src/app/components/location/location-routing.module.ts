
import { AddEditBrandComponent } from './../brand/add-edit-brand/add-edit-brand.component';
import { LayoutLocationComponent } from './layout-location/layout-location.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { AddEditLocationComponent } from './add-edit-location/add-edit-location.component';

const routes: Routes = [
  {path:'', component:LayoutLocationComponent,
children:[
  {path:'',component:LocationComponent},
  {path:'add',  data: {breadcrumb: 'Add Fuel'},component:AddEditLocationComponent},
  {path:'edit/:id',  data: {breadcrumb: 'Edit Fuel'},component:AddEditLocationComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
