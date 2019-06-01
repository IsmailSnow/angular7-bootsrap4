import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes())
  ]
})
export class AuthModule { }
