import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface items{
  id:number;
  reason:string;
  date:string;
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
  postData(bp:number,rr:number,temp:number,height:number,weight:number,notes:string):Observable<any>{
  
    return this.http.post("https://localhost:7102/api/VisitDetails/AddVisitDetails",
    {
      "patientId": this.myData.patientId,
      "height": height,
      "weight": weight,
      "bloodPressureSystolic": bp,
      "bloodPressureDiastolic": 0,
      "bodyTemperature":temp,
      "respirationRate": rr,
      "bloodGroup": "string",
      "nurseEmail": "string",
      "physicianEmail": this.myData.physicianEmail,
      "appointmentId": this.myData.id,
      "keyNotes": notes
    })
  }
  public getData():Observable<any>
  {
    return this.http.get("https://localhost:7267/api/Appointment",{headers:this.httpOptions.headers});
  }
  public serviceUrl="https://localhost:7267/api/Appointment";
  // `${this.serviceUrl}/${data.patientId}`,
  public update(data:any):Observable<any>{
      return this.http.put("https://localhost:7267/api/Appointment/22", {
        
        "reason": "string",
        "date": "string",
        "acceptance": 2,
        "patientId": 22,
        "physicianEmail": "string",
        "submissionDate": "string"
      })
  }

  public myData:any;
}
