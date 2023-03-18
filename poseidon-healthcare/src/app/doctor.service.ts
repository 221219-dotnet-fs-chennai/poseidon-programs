import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() { }

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
