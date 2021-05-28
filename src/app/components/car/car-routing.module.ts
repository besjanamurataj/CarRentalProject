import { LayoutComponent } from './layout/layout.component';
import { AddEditCarComponent,} from './add-edit-car/add-edit-car.component';
import { CarComponent } from './car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',  data: {breadcrumb: ''},
    component: LayoutComponent,
    children: [
      { path: '',  data: {breadcrumb:""}, component: CarComponent },
      { path: 'add', data: {breadcrumb: 'Add a Car'}, component: AddEditCarComponent },
      { path: 'edit/:id', data: {breadcrumb: 'Edit Car'}, component: AddEditCarComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
