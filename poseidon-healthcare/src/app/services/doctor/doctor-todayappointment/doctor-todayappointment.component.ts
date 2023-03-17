import { Component } from '@angular/core';
import { DoctorService } from 'src/app/doctor.service';
import { DatePipe } from '@angular/common';
import {PageEvent} from '@angular/material/paginator';



@Component({
  selector: 'app-doctor-todayappointment',
  templateUrl: './doctor-todayappointment.component.html',
  styleUrls: ['./doctor-todayappointment.component.css']
})
export class DoctorTodayappointmentComponent {
  date = new Date();
  constructor(public doc:DoctorService){};

  
}
