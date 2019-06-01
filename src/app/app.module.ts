import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormManagerService, FormManagerConfig } from 'angular-formio/manager';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioResources } from 'angular-formio/resource';
import { AuthConfig, AppConfig } from '../../src/app/config';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
