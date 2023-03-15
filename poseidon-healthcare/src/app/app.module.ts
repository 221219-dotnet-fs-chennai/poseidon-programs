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
import { NavbarComponentComponent } from './Home_Page/navbar-component/navbar-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentComponent } from './Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Login_Page/login-component/login-component.component';
import { LoginFormComponentComponent } from './Login_Page/login-form-component/login-form-component.component';
import { LoginNavbarComponentComponent } from './Login_Page/login-navbar-component/login-navbar-component.component';
import { HomeContentComponent } from './Home_Page/home-content/home-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    LoginFormComponentComponent,
    LoginNavbarComponentComponent,
    HomeContentComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
