import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './Patient/Home_Page/navbar-component/navbar-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentComponent } from './Patient/Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Patient/Login_Page/login-component/login-component.component';
import { LoginFormComponentComponent } from './Patient/Login_Page/login-form-component/login-form-component.component';
import { LoginNavbarComponentComponent } from './Patient/Login_Page/login-navbar-component/login-navbar-component.component';
import { HomeContentComponent } from './Patient/Home_Page/home-content/home-content.component';
import { SigninComponentComponent } from './Patient/SignIn_Page/signin-component/signin-component.component';
import { SigninNavbarComponentComponent } from './Patient/SignIn_Page/signin-navbar-component/signin-navbar-component.component';
import { SigninFormComponentComponent } from './Patient/SignIn_Page/signin-form-component/signin-form-component.component';
import { MainhomeComponent } from './Home/mainhome/mainhome.component';
import { HomeNavbarComponent } from './Home/home-navbar/home-navbar.component';
import { MainHomeContentComponent } from './Home/main-home-content/main-home-content.component';
import { ServiceHomeComponent } from './Service/service-home/service-home.component';
import { ServiceNavbarComponent } from './Service/service-navbar/service-navbar.component';
import { ServiceContentComponent } from './Service/service-content/service-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    LoginFormComponentComponent,
    LoginNavbarComponentComponent,
    HomeContentComponent,
    SigninComponentComponent,
    SigninNavbarComponentComponent,
    SigninFormComponentComponent,
    MainhomeComponent,
    HomeNavbarComponent,
    MainHomeContentComponent,
    ServiceHomeComponent,
    ServiceNavbarComponent,
    ServiceContentComponent,
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
