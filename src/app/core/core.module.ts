import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  entryComponents: [
    EmailLoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    EmailLoginComponent
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
