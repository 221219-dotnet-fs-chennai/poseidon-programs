import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-profile-content',
  templateUrl: './patient-profile-content.component.html',
  styleUrls: ['./patient-profile-content.component.css']
})
export class PatientProfileContentComponent {

  constructor(private router:Router)
  {

  }

  to_book_appointment()
  {
    this.router.navigate(['patient_book_app'])
  }
}
