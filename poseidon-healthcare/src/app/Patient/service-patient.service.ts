import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';
import { Observable } from 'rxjs';

export interface patientObj {
  email: string;
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  contactNumber: string;
  password: string;
  gender: string;
  address: string;
}
export interface getPatientObj {
  Id: number;
  email: string;
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  contactNumber: string;
  password: string;
  gender: string;
  address: string;
}

export interface items {
  id: number;
  reason: string;
  date: string;
  acceptance: number;
  //physicianEmail:string;
  submissionDate: string;
}

export interface loginDetails {
  Email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServicePatientService {
  constructor(private http: HttpClient) { }

  // VARIABLE DECLARATIONS

  currentUser: any;
  patientData: patientObj;
  email: string;
  password: string;

  patientDet: patientObj = {
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    dob: '',
    contactNumber: '',
    password: '',
    gender: '',
    address: '',
  };
  updatedPatient: getPatientObj = {
    Id: 0,
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    dob: '',
    contactNumber: '',
    password: '',
    gender: '',
    address: '',
  };

  // FOR AUTO REFRESH OF VIEW AFTER DB UPDATE
  private _refreshRequired = new Subject<void>();

  getRefreshRequired() {
    return this._refreshRequired;
  }

  //RootURLS
  rootURL = 'https://localhost:7102/api/Patient';
  appointmentRootUrl = 'https://localhost:7267/api/Appointment/';
  physicianAvaRootUrl = 'https://localhost:7140/api/PhysicianAvailability/';

  //NEW PATIENT REGISTRATION
  addPatient(patient: any) {
    this.patientDet.firstName = patient.firstName;
    this.patientDet.lastName = patient.lastName;
    this.patientDet.title = patient.title;
    this.patientDet.contactNumber = patient.contactNumber;
    this.patientDet.address = patient.address;
    this.patientDet.password = patient.password;
    this.patientDet.dob = patient.dob;
    this.patientDet.gender = patient.gender;
    this.patientDet.email = patient.email;
    localStorage.setItem('currentUserEmail', patient.email);
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(this.patientDet);
    console.log(body);
    return this.http
      .post(this.rootURL + '/Add_Patient', body, { headers: headers })
      .pipe(
        tap(() => {
          this._refreshRequired.next();
        })
      );
  }

  //DETAILS FOR PROFILE PAGE AFTER LOGIN
  getDetailsForProfile(id: number) {
    return this.http.get<patientObj>(this.rootURL + '/Get_by_ID/' + id);
  }

  //UPDATE USER DETAILS
  updatePersonalDetails(id: number, updatedDetails: any) {
    var headers;
    var body;
    console.log('update call');
    this.currentUser = JSON.parse(localStorage.getItem('LoggedInUserId')!);
    console.log(this.currentUser);
    this.getDetailsForProfile(this.currentUser).subscribe((res) => {
      this.patientData = res;
    });
    console.log(this.patientData);

    (this.updatedPatient.firstName = this.patientData.firstName),
      (this.updatedPatient.lastName = this.patientData.lastName),
      (this.updatedPatient.dob = this.patientData.dob),
      (this.updatedPatient.gender = this.patientData.gender),
      (this.updatedPatient.password = this.patientData.password),
      (this.updatedPatient.title = this.patientData.title);

    console.log(updatedDetails);
    (this.updatedPatient.Id = id),
      (this.updatedPatient.email = updatedDetails.email);
    this.updatedPatient.address = updatedDetails.address;
    this.updatedPatient.contactNumber = updatedDetails.contactNumber;
    console.log(this.updatedPatient);
    headers = { 'content-type': 'application/json' };
    body = JSON.stringify(this.updatedPatient);
    console.log(body);

    console.log(body);
    return this.http
      .put(this.rootURL + '/Update_Patient/' + id, body, { headers: headers })
      .pipe(
        tap(() => {
          this._refreshRequired.next();
        })
      );
  }
  //LOGIN
  tryLogin(details: any) {
    this.email = details.Email;
    this.password = details.password;

    return this.http.get<number>(
      this.rootURL + '/patientLogin/' + this.email + '/' + this.password
    );
  }

  //APPOINTMENT HISTORY
  public getAppointmentHistory(id: number): Observable<any> {
    return this.http.get(this.appointmentRootUrl + 'GetbyPatientID/' + id);
  }

  //AVAILABLE DOCTORS LIST
  public getAllAvailableDoctors() {
    return this.http.get(this.physicianAvaRootUrl + 'Get_All_Physicians');
  }
}
