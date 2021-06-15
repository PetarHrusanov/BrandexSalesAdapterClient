import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from './authentication/authentication.module';

import { SharedModule } from './shared/shared.module';

import { DealersModule } from './dealers/dealers.module';
import { CarsModule } from './cars/cars.module';

import { BrandexMainComponent } from './brandex/brandex-main/brandex-main.component';

import { SalesModule } from './sales/sales.module';


@NgModule({
  declarations: [
    AppComponent,
    BrandexMainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,

    SharedModule,
    
    AuthenticationModule,

    CarsModule,
    DealersModule,

    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
