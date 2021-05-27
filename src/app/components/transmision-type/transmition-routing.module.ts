import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddEditTransmisionComponent } from './add-edit-transmision/add-edit-transmision.component';
import { TransmisionTypeComponent } from './transmision-type.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: "Transmision"},
    component: LayoutComponent,
    children: [
      { path: '',data: { breadcrumb: null}, component: TransmisionTypeComponent },
      { path: 'add',data: {breadcrumb: 'Add Transmision'}, component: AddEditTransmisionComponent },
      { path: 'edit/:id',data: {breadcrumb: 'Edit Transmision'}, component: AddEditTransmisionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransmitionRoutingModule {}
