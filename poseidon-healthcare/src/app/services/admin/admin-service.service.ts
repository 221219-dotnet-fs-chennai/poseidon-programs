import { HttpClient, HttpClientModule } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {

  constructor(private httpclient: HttpClient) { }

  getallPatients():Observable<Patient_Info[]> {
    return this.httpclient.get<Patient_Info[]>('https://localhost:7292/poseidonhc/get_all_pat');
  }
}
