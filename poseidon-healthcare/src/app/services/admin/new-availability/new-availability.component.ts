import { Component } from '@angular/core';

interface Doctor {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-availability',
  templateUrl: './new-availability.component.html',
  styleUrls: ['./new-availability.component.css']
})
export class NewAvailabilityComponent {
  doctors: Doctor[] = [
    { value: 'Chris-0', viewValue: 'Chris (Dermatologist)' },
    { value: 'Sanjay-1', viewValue: 'Sanjay (Ortho)' },
    { value: 'Ramaswamy-2', viewValue: 'Ramaswamy (General)' },
  ];
  
}
