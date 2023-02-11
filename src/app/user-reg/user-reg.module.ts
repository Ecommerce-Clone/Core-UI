import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserRegRoutingModule } from './user-reg-routing.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent, PasswordResetComponent],
  imports: [CommonModule, UserRegRoutingModule],
})
export class UserRegModule {}
