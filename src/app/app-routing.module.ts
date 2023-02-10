import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './user-reg/signup/signup.component';

const routes: Routes = [
  {path:"",redirectTo:""},
  {path:"",component:AppComponent},
  {path:"/signup",component:SignupComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
