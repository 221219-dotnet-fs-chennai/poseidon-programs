import { Component } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabek: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
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
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class NewAvailabilityComponent {
  doctors: Doctor[] = [
    { value: 'Chris-0', viewValue: 'Chris (Dermatologist)' },
    { value: 'Sanjay-1', viewValue: 'Sanjay (Ortho)' },
    { value: 'Ramaswamy-2', viewValue: 'Ramaswamy (General)' },
  ];
}
