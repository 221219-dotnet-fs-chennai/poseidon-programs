import { Component } from '@angular/core';
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
export class NewAvailabilityComponent {
  doctors: Doctor[] = [
    { value: 'Chris-0', viewValue: 'Chris (Dermatologist)' },
    { value: 'Sanjay-1', viewValue: 'Sanjay (Ortho)' },
    { value: 'Ramaswamy-2', viewValue: 'Ramaswamy (General)' },
  ];

  date = new FormControl(moment());

}
