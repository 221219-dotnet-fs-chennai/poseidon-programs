import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface items{
  id:number;
  reason:string;
  date:string;
  //acceptance:number;
  //physicianEmail:string;
  submissionDate:string;

}

@Injectable({
  providedIn: 'root'
})


export class ServicenurseService {

  constructor(private http:HttpClient){}

  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json',

    })  
  }

  public getData():Observable<any>
  {
    // let url="https://localhost:7267/api/Appointment";
    // return this.http.get(url);

    return this.http.get("https://localhost:7267/api/Appointment/1",{headers:this.httpOptions.headers});
  }
}
