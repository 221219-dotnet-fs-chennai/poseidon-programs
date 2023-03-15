import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Login_Page/login-component/login-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  {
    path: 'login_page', component: LoginComponentComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
