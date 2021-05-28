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
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
    canActivate: [AuthguardGuard],
    children: [
      {
        path: 'car',
         data: { breadcrumb: 'Car' },
        loadChildren: () =>
          import('./components/car/car.module').then((m) => m.CarModule),
      },
      {
        path: 'model',
        data: { breadcrumb: 'Model' },
        loadChildren: () =>
          import('./components/model/model.module').then((m) => m.ModelModule),
      },
      {
        path: 'fueltype',
        data: { breadcrumb: 'Fuel Type' },
        loadChildren: () =>
          import('./components/fuel-type/fuel-type.module').then(
            (m) => m.FuelTypeModule
          ),
      },
      {
        path: 'brand',
        data: { breadcrumb: 'Brand' },
        loadChildren: () =>
          import('./components/brand/brand.module').then((m) => m.BrandModule),
      },
      {
        path: 'transmision',
        data: { breadcrumb: 'Transmision' },
        loadChildren: () =>
          import('./components/transmision-type/transmision.module').then(
            (m) => m.TransmisionModule
          ),
      },
      {
        path: 'model/:id',

        component: ModelComponent,
        data: { breadcrumb: 'Brand Details' },
      },
      // {
      //   path: 'location',
      //   data: { breadcrumb: 'Location' },
      //   loadChildren: () =>
      //     import('./components/location/location.module').then(
      //       (m) => m.LocationModule
      //     ),
      // },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
