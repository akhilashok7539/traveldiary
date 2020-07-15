import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEntryComponent } from "src/app/list-entry/list-entry.component";
import { RegisterScreenComponent } from "src/app/register-screen/register-screen.component";
import { SignInScreenComponent } from "src/app/sign-in-screen/sign-in-screen.component";
import { ForgotPwdComponent } from "./forgot-pwd/forgot-pwd.component"
const routes: Routes = [
  { 
    path: 'list', 
    component: ListEntryComponent 
  },
  { 
    path: 'register', 
    component: RegisterScreenComponent 
  },
  { 
    path: 'login', 
    component: SignInScreenComponent 
  },
  { 
    path: 'forgot_pwd', 
    component: ForgotPwdComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
