import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface patientObj{
    email: string,
    title: string,
    firstName: string,
    lastName: string,
    dob: string,
    contactNumber: string,
    password: string,
    gender:string,
    address:string
}
export interface getPatientObj{
    Id: number,
    email: string,
    title: string,
    firstName: string,
    lastName: string,
    dob: string,
    contactNumber: string,
    password: string,
    gender:string,
    address:string
}

@Injectable({
  providedIn: 'root'
})
  

export class ServicePatientService {

  constructor(private http: HttpClient) { }
  
  patientDet: patientObj = {
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    dob: '',
    contactNumber: '',
    password: '',
    gender: '',
    address: ''
  };

  updatedPatient: getPatientObj = {
    Id:0,
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    dob: '',
    contactNumber: '',
    password: '',
    gender: '',
    address: ''
  };





  rootURL = 'https://localhost:7102/api/Patient';

  addPatient(patient: any) {
    this.patientDet.firstName = patient.firstName;
    this.patientDet.lastName = patient.lastName;
    this.patientDet.title = patient.title;
    this.patientDet.contactNumber = patient.contactNumber;
    this.patientDet.address = patient.address;
    this.patientDet.password = patient.password;
    this.patientDet.dob = patient.password;
    this.patientDet.gender = patient.gender;
    this.patientDet.email = patient.email;
    localStorage.setItem('currentUserEmail', patient.email);
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(this.patientDet);
    console.log(body)
    return this.http.post(this.rootURL + '/Add_Patient', body,{'headers':headers})
  }


  getDetailsForProfile(id: number) {
    return this.http.get<patientObj>(this.rootURL + '/Get_by_ID?id=' + id);
  }

  updatePersonalDetails(id: number, updatedDetails: any) {
    var headers;
    var body;
    this.getDetailsForProfile(13).subscribe(res => {
      this.updatedPatient.firstName = res.firstName,
        this.updatedPatient.lastName = res.lastName,
        this.updatedPatient.dob = res.dob,
        this.updatedPatient.gender = res.gender,
        this.updatedPatient.password = res.password,
        this.updatedPatient.title = res.title
      console.log(res);
      console.log(updatedDetails);
    this.updatedPatient.Id=id,
    this.updatedPatient.email = updatedDetails.email;
    this.updatedPatient.address = updatedDetails.address;
    this.updatedPatient.contactNumber = updatedDetails.contactNumber;
    console.log(this.updatedPatient);
     headers = { 'content-type': 'application/json'}  
    body=JSON.stringify(this.updatedPatient);
      console.log(body);
    return this.http.put(this.rootURL + 'Update_Patient?id=' + id, body, { 'headers': headers });
    });
    
  }

}

