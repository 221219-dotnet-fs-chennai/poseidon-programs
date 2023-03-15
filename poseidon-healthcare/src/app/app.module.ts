import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
import { LoginLogoutComponent } from './services/authservices/login-logout/login-logout.component';

import { AuthModule } from '@auth0/auth0-angular';
import { NursehomeComponent } from './services/nurse/nursehome/nursehome.component';
import { AdminhomeComponent } from './services/admin/adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    LoginFormComponentComponent,
    LoginNavbarComponentComponent,
    HomeContentComponent,
    LoginLogoutComponent,
    NursehomeComponent,
    AdminhomeComponent,
  ],
  imports: [
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
    AuthModule.forRoot({
      domain: 'dev-4o16n0ly4u0mxvll.us.auth0.com',
      clientId: '8moNAcVOTwfw9svEb3vGDPD89Me1QyDG',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
