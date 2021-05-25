import { LayoutComponent } from './layout/layout.component';
import { AddEditCarComponent,} from './add-edit-car/add-edit-car.component';
import { CarComponent } from './car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CarComponent },
      { path: 'add', component: AddEditCarComponent },
      { path: 'edit/:id', component: AddEditCarComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
