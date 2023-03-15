import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Patient/Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Patient/Login_Page/login-component/login-component.component';

// 
import { AdminhomeComponent } from './services/admin/adminhome/adminhome.component';
import { DoctorhomeComponent } from './services/doctor/doctorhome/doctorhome.component';
import { NursehomeComponent } from './services/nurse/nursehome/nursehome.component';

import { AuthorizationService } from './authorization.service';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  {path: 'login_page', component: LoginComponentComponent},
  {path:'adminhome',component:AdminhomeComponent,canActivate:[AuthGuard]},
  {path:'doctorhome',component:DoctorhomeComponent,canActivate:[AuthGuard]},
  {path:'nursehome',component:NursehomeComponent,canActivate:[AuthGuard]}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(public myauth:AuthorizationService){}
}
