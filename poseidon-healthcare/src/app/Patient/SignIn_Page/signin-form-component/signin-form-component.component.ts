import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServicePatientService } from '../../service-patient.service';
import { pipe, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-form-component',
  templateUrl: './signin-form-component.component.html',
  styleUrls: ['./signin-form-component.component.css'],
  
})
export class SigninFormComponentComponent {

  constructor(private service:ServicePatientService,private router:Router){}
  
  onSubmit(f: NgForm) {
    this.service.addPatient(f).pipe(
  catchError(error => {
    const statusCode = error.status;
    console.log("failed");
    return throwError(error);
  })
)
      .subscribe(response => {
        
  // This is where you can handle the successful response
  console.log("success");
  this.router.navigate(['patient_profile']);
});

    console.log(f);
  }

  getValue(f:any) {
    console.log(f);
  }
}
