import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainhomeComponent } from './Home/mainhome/mainhome.component';
import { ServiceHomeComponent } from './Service/service-home/service-home.component';
import { HomeComponentComponent } from './Patient/Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Patient/Login_Page/login-component/login-component.component';
import { SigninComponentComponent } from './Patient/SignIn_Page/signin-component/signin-component.component';

// 
import { AdminhomeComponent } from './services/admin/adminhome/adminhome.component';
import { DoctorhomeComponent } from './services/doctor/doctorhome/doctorhome.component';
import { NursehomeComponent } from './services/nurse/nursehome/nursehome.component';
import { NurseProfilePageComponent } from './services/nurse/nurse_profile/nurse-profile-page/nurse-profile-page.component';

import { AuthorizationService } from './authorization.service';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: MainhomeComponent },
  { path: 'service_home', component: ServiceHomeComponent },
  { path: 'patient_home', component: HomeComponentComponent },
  { path: 'login_page', component: LoginComponentComponent },
  { path: 'signin_page', component: SigninComponentComponent },
  { path: 'nurse_profile', component: NurseProfilePageComponent },
  { path: 'adminhome', component: AdminhomeComponent, canActivate: [AuthGuard] },
  { path: 'doctorhome', component: DoctorhomeComponent, canActivate: [AuthGuard] },
  { path: 'nurse_home', component: NursehomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(public myauth: AuthorizationService) { }
}
