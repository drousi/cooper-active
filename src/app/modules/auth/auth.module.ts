import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NbAlertModule } from '@nebular/theme';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    NbAlertModule
  ]
})
export class AuthModule { }
