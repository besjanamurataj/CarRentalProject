
import { FuelTypeComponent } from './fuel-type.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,
   children:[
      {path:'', data: {breadcrumb: "FuelType"}, component:FuelTypeComponent},
     {path:'add',  data: {breadcrumb: 'Add Fuel'},component:AddEditComponent},
     {path:'edit/:id',  data: {breadcrumb: 'Edit Fuel'},component:AddEditComponent},

   ]},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelTypeRoutingModule { }
