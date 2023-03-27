import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Patient_Info {
  id: number,
  email: string,
  title: string,
  firstName: string,
  lastName: string,
  dob: string,
  contactNumber: string,
  password: string,
  gender: string,
  address: string
}

export interface add_doctors {
  email: string,
  name: string,
  dept: string
}

export interface getDocbyEmail {
  email: string,
  name: string,
  dept: string
}

export interface getAvailableDoc 
{
  doctorEmail: string,
  availableFrom: string,
  availableTo: string,
  scheduleStatus: boolean
}

@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {

  doctors: add_doctors = {
    email: '',
    name: '',
    dept: ''
  }
  constructor(private httpclient: HttpClient) { }

  // get all patients for admin
  getallPatients(): Observable<Patient_Info[]> {
    return this.httpclient.get<Patient_Info[]>('https://localhost:7292/poseidonhc/get_all_pat');
  }

  // get all available doctors
  getAvailableDoctor(): Observable<getAvailableDoc[]>{
    return this.httpclient.get<getAvailableDoc[]>('https://localhost:7292/poseidonhc/getdocbyStatus/false');
  }

  // get doctors by email
  getDoctorsbyEmail(email: string): Observable<getDocbyEmail>
  {
    return this.httpclient.get<getDocbyEmail>(`https://localhost:7292/poseidonhc/Get_particular_doctor/${email}`)
  }

  getDoctorsAvailablebyEmail(email: string): Observable<getAvailableDoc>
  {
    return this.httpclient.get<getAvailableDoc>(`https://localhost:7292/poseidonhc/particular_doc_avail/${email}`)
  }

  addDoctors(doctor: any)
  {
    this.doctors.email = doctor.email;
    this.doctors.name = doctor.name;
    this.doctors.dept = doctor.dept

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(this.doctors);

    return this.httpclient.post('https://localhost:7292/poseidonhc/Add_Doctor', body, {headers: headers})
  }
}
