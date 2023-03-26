import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { getAvailableDoc, AdminServiceService } from '../admin-service.service';



const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


interface Doctor {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-availability',
  templateUrl: './new-availability.component.html',
  styleUrls: ['./new-availability.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class NewAvailabilityComponent implements OnInit {

  doctor_available!: getAvailableDoc;

  startDate: Date;
  endDate: Date;
  
  fromDate: Moment;
  toDate: Moment;

  fromdateinput: string;
  todateinput: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogref: MatDialogRef<NewAvailabilityComponent>,
    private adminservice: AdminServiceService) {

  }

  ngOnInit(): void {
    // console.log(this.data.docemail);
    this.adminservice.getDoctorsAvailablebyEmail(this.data.docemail).subscribe(response => {
      console.log(response);
      this.doctor_available = response;

      var start_date = this.doctor_available.availableFrom.split('/');
      var end_date = this.doctor_available.availableTo.split('/');

      this.startDate = new Date(Number(start_date[2]), Number(start_date[1]) - 1, Number(start_date[0]));
      this.endDate = new Date(Number(end_date[2]), Number(end_date[1]) - 1, Number(end_date[0]));
    })
    // console.log(this.doctor_available.availableFrom);
  }

  add_availability() {
    this.fromdateinput = moment(this.fromDate).format('DD/MM/YYYY')
    this.todateinput = moment(this.toDate).format('DD/MM/YYYY') 
  
    console.log(this.data.docemail);
    console.log(this.fromdateinput);
    console.log(this.todateinput);
    console.log();
  }

  close_dialogbox() {
    this.dialogref.close();
  }
}
