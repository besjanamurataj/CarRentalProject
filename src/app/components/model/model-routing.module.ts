
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditModelComponent } from './add-edit-model/add-edit-model.component';
import { LayoutComponent } from './layout/layout.component';
import { ModelComponent } from './model.component';


const routes: Routes = [
  {path:"", component:LayoutComponent,
  children:[
    {path:'', data: {breadcrumb: null}, component:ModelComponent},
    {path:'add',  data: {breadcrumb: 'Add Model'}, component:AddEditModelComponent},
    {path:'edit/:id', data: {breadcrumb: 'Add Model'}, component:AddEditModelComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }
