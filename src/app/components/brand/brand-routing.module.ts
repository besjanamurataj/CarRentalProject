import { NgModule } from '@angular/core';
import { AddEditBrandComponent } from './add-edit-brand/add-edit-brand.component';
import { BrandComponent } from './brand.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ModelComponent } from '../model/model.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Brand' },
    component: LayoutComponent,
    children: [
      { path: '', data: { breadcrumb: null }, component: BrandComponent },
      {
        path: 'add',
        data: {
          breadcrumb: 'Add Brad',
        },
        component: AddEditBrandComponent,
      },
      {
        path: 'edit/:id',
        data: {
          breadcrumb: 'Edit Brad',
        },
        component: AddEditBrandComponent,
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandRoutingModule {}
