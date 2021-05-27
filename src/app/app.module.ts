import { CarModule } from './components/car/car.module';
import { AccountModule } from './account/account.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './core/interceptor/login.interceptor';
import { BreadcrumbModule } from 'angular-crumbs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    CarModule,
    AccountModule,
    HttpClientModule,
<<<<<<< HEAD
=======
    BreadcrumbModule


>>>>>>> f96454dd0603369a800d3660c087ab79b35fe784
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
