
import { FuelTypeComponent } from './fuel-type.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  {path:'', data: {breadcrumb: 'FuelType'},component:LayoutComponent,
   children:[
<<<<<<< HEAD
       {path:'', data: {breadcrumb: null}, component:FuelTypeComponent},
=======
      {path:'', data: {breadcrumb: "FuelType"}, component:FuelTypeComponent},
>>>>>>> f96454dd0603369a800d3660c087ab79b35fe784
     {path:'add',  data: {breadcrumb: 'Add Fuel'},component:AddEditComponent},
     {path:'edit/:id',  data: {breadcrumb: 'Edit Fuel'},component:AddEditComponent},

   ]},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelTypeRoutingModule { }
