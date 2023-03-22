import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PatReasonDialogComponent } from '../pat-reason-dialog/pat-reason-dialog.component';

import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

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

@Component({
  selector: 'app-pat-appointment-content',
  templateUrl: './pat-appointment-content.component.html',
  styleUrls: ['./pat-appointment-content.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class PatAppointmentContentComponent {

  date = new FormControl(moment());

  constructor(private router: Router, public dialog: MatDialog) {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PatReasonDialogComponent, {
      data: {},
      width: '35%'
    });
  }

   to_profile() {
    this.router.navigate(['patient_profile']);
  }
  
}
