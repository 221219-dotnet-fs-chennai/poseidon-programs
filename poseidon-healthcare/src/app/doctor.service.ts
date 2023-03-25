import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointments } from './appointments';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  appointment_num:number;

  constructor(private http:HttpClient) { }

  urlAppointment = "https://localhost:7292/poseidonhc";

  // https://localhost:7267/api/Appointment/AcceptanceAndEmail?AcceptanceNo=0&Email=string
  // https://localhost:7267/api/Appointment/AcceptanceAndEmail/0/string
  // https://localhost:7292/poseidonhc/AcceptanceAndEmail/0/string


  
  // This service is to get all the patient appointment details based on acceptance number and doctor email id.
  public GetAppointmentsByAceptanceEmail(id:Number,email:String):Observable<any>{
    const url = `${this.urlAppointment}/AcceptanceAndEmail/${id}/${email}`;
    return this.http.get<any>(url);
  }

  // https://localhost:7292/poseidonhc/Get_by_ID/11
  // This service is to get the patient detila based on their patient id.
  public GetPatientDetailsByID(id:Number):Observable<any>{
    const url = `${this.urlAppointment}/Get_by_ID/${id}`
    return this.http.get<any>(url);
  }

  // https://localhost:7267/api/Appointment/updatebyAppointMentNo/4/0
  // https://localhost:7292/poseidonhc/updatebyAppointMentNo/4/1

  public PutAcceptancebyId(id:Number,Acceptance:Number):Observable<any>{
    const url = `${this.urlAppointment}/updatebyAppointMentNo/${id}/${Acceptance}`;
    return this.http.put<any>(url,null);
    
  }


 
  
  



  Patient_Details: any[] = [
    {position:1,name:'Abdul',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:2,name:'Madhu',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:3,name:'MadhuVanthi',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:4,name:'Ajith',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:5,name:'Yugaraj',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:6,name:'Maruti',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:7,name:'Rizwan',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:8,name:'Jyotish',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:9,name:'Mahesh',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:10,name:'Mani',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:11,name:'Monica',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:12,name:'Ajay',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:13,name:'Raghu',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},

    // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];
}
