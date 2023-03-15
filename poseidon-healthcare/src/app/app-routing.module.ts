import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Patient/Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Patient/Login_Page/login-component/login-component.component';
import { SigninComponentComponent } from './Patient/SignIn_Page/signin-component/signin-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'login_page', component: LoginComponentComponent },
  { path: 'signin_page', component: SigninComponentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
