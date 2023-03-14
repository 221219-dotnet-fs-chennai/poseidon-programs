import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainhomepageComponent } from './homepage/mainhomepage/mainhomepage.component';
// import { AdminloginComponent } from './common/adminlogin/adminlogin.component';

import { AuthModule } from '@auth0/auth0-angular';

import { AuthButtonComponent } from './common/adminlogin/adminlogin.component';
import { DoctorhomeComponent } from './services/doctor/doctorhome/doctorhome.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainhomepageComponent,
    AuthButtonComponent,
    DoctorhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain:'dev-4o16n0ly4u0mxvll.us.auth0.com',
      clientId:'8moNAcVOTwfw9svEb3vGDPD89Me1QyDG',
      authorizationParams: {
        redirect_uri:window.location.origin,
      
        
      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
