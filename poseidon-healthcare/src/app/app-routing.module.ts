import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainhomeComponent } from './Home/mainhome/mainhome.component';
import { ServiceHomeComponent } from './Service/service-home/service-home.component';
import { HomeComponentComponent } from './Patient/Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Patient/Login_Page/login-component/login-component.component';
import { SigninComponentComponent } from './Patient/SignIn_Page/signin-component/signin-component.component';

const routes: Routes = [
  { path: '', component: MainhomeComponent },
  { path: 'service_home', component: ServiceHomeComponent },
  { path: 'patient_home', component: HomeComponentComponent },
  { path: 'login_page', component: LoginComponentComponent },
  { path: 'signin_page', component: SigninComponentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
