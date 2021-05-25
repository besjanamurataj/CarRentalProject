import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddEditTransmisionComponent } from './add-edit-transmision/add-edit-transmision.component';
import { TransmisionTypeComponent } from './transmision-type.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: TransmisionTypeComponent },
      { path: 'add', component: AddEditTransmisionComponent },
      { path: 'edit/:id', component: AddEditTransmisionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransmitionRoutingModule {}
