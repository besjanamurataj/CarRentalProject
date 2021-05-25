import { NgModule } from '@angular/core';
import { AddEditBrandComponent } from './add-edit-brand/add-edit-brand.component';
import { BrandComponent } from './brand.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: BrandComponent },
      { path: 'add', component: AddEditBrandComponent },
      { path: 'edit/:id', component: AddEditBrandComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandRoutingModule { }
