import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';


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

import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

import { LoginLogoutComponent } from './services/authservices/login-logout/login-logout.component';

import { AuthModule } from '@auth0/auth0-angular'; ``
import { NursehomeComponent } from './services/nurse/nursehome/nursehome.component';
import { AdminhomeComponent } from './services/admin/adminhome/adminhome.component';


import { PatientProfileNavbarComponent } from './Patient/Patient_Profile/patient-profile-navbar/patient-profile-navbar.component';
import { PatientProfileHomeComponent } from './Patient/Patient_Profile/patient-profile-home/patient-profile-home.component';
import { PatientProfileContentComponent } from './Patient/Patient_Profile/patient-profile-content/patient-profile-content.component';
import { NurseNavComponent } from './services/nurse/nurse-nav/nurse-nav.component';
import { NurseHomecontentComponent } from './services/nurse/nurse-homecontent/nurse-homecontent.component';
import { NurseProfilePageComponent } from './services/nurse/nurse_profile/nurse-profile-page/nurse-profile-page.component';
import { NurseProfileNavbarComponent } from './services/nurse/nurse_profile/nurse-profile-navbar/nurse-profile-navbar.component';
import { NurseProfileContentComponent } from './services/nurse/nurse_profile/nurse-profile-content/nurse-profile-content.component';
import { DoctorProfileComponent } from './services/doctor/doctor-profile/doctor-profile.component';

import { DoctorhomeComponent } from './services/doctor/doctorhome/doctorhome.component';
import { DoctorNavComponent } from './services/doctor/doctor-nav/doctor-nav.component';
import { AdminprofileComponent } from './services/admin/adminprofile/adminprofile.component';
import { AdminnavComponent } from './services/admin/adminnav/adminnav.component';
import { DoctorTodayappointmentComponent } from './services/doctor/doctor-todayappointment/doctor-todayappointment.component';
import { PaginationTdComponent } from './services/doctor/pagination-td/pagination-td.component';
import { PatientBookAppointmentComponent } from './Patient/Book_Appointment/patient-book-appointment/patient-book-appointment.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PatAppointmentNavComponent } from './Patient/Book_Appointment/pat-appointment-nav/pat-appointment-nav.component';
import { PatAppointmentContentComponent } from './Patient/Book_Appointment/pat-appointment-content/pat-appointment-content.component';
import { PatientEditDialogboxComponent } from './Patient/Patient_Profile/patient-edit-dialogbox/patient-edit-dialogbox.component';
import { NurseAppointmentPageComponent } from './services/nurse/nurse_appointment/nurse-appointment-page/nurse-appointment-page.component';
import { NurseAppointmentNavbarComponent } from './services/nurse/nurse_appointment/nurse-appointment-navbar/nurse-appointment-navbar.component';
import { NurseAppointmentContentComponent } from './services/nurse/nurse_appointment/nurse-appointment-content/nurse-appointment-content.component';
import { NurseVitalContentComponent } from './services/nurse/nurse-vital-content/nurse-vital-content.component';
import { MatTableModule } from '@angular/material/table';
import { AdminScheduleComponent } from './services/admin/admin-schedule/admin-schedule.component';
import { NewAvailabilityComponent } from './services/admin/new-availability/new-availability.component';
import { NativeDateModule } from '@angular/material/core';

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
    LoginLogoutComponent,
    NursehomeComponent,
    AdminhomeComponent,
    SigninComponentComponent,
    SigninNavbarComponentComponent,
    SigninFormComponentComponent,
    MainhomeComponent,
    HomeNavbarComponent,
    MainHomeContentComponent,
    ServiceHomeComponent,
    ServiceNavbarComponent,
    ServiceContentComponent,
    DoctorProfileComponent,
    DoctorhomeComponent,
    DoctorNavComponent,

    PatientProfileNavbarComponent,
    PatientProfileHomeComponent,
    PatientProfileContentComponent,
    NurseNavComponent,
    NurseHomecontentComponent,
    NurseProfilePageComponent,
    NurseProfileNavbarComponent,
    NurseProfileContentComponent,
    AdminprofileComponent,
    AdminnavComponent,
    DoctorTodayappointmentComponent,
    PaginationTdComponent,
    PatientBookAppointmentComponent,
    PatAppointmentNavComponent,
    PatAppointmentContentComponent,
    PatientEditDialogboxComponent,
    NurseAppointmentPageComponent,
    NurseAppointmentNavbarComponent,
    NurseAppointmentContentComponent,
    NurseVitalContentComponent,
    AdminScheduleComponent,
    NewAvailabilityComponent,
  ],

  imports: [
    NativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
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
    MatGridListModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,

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
