import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { UserValidatorDirective } from './user-validator.directive';



@NgModule({
  declarations: [LoginComponent, UserValidatorDirective],
  exports: [
    UserValidatorDirective
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
