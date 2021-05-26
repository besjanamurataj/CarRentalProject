import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './layout/home/home/home.component';
import { ModelComponent } from './components/model/model.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AuthguardGuard } from './core/guards/authguard.guard';


const routes: Routes = [
  {
    path:'home',    data:{breadcrumb: 'Home'}, component:SidebarComponent,

    canActivate:[AuthguardGuard],
    children:[
      {
        path: 'car',
      loadChildren: () =>
         import('./components/car/car.module').then(m => m.CarModule),
      },
     {
       path: 'model',
      loadChildren: () =>
       import('./components/model/model.module').then((m) => m.ModelModule),
   },
    {
      path: 'fueltype',
      loadChildren: () =>
        import('./components/fuel-type/fuel-type.module').then(
          (m) => m.FuelTypeModule
        ),
    },
    {path:'brand', loadChildren:()=> import('./components/brand/brand.module').then(m=> m.BrandModule)},
    {path:'transmision', loadChildren:()=> import('./components/transmision-type/transmision.module').then(m =>m.TransmisionModule)},
    {path:'model/:id', component:ModelComponent,data:{breadcrumb: 'Brand Details'}},
    ]
  },


  { path: 'login',component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
