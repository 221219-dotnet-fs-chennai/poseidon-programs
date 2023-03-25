import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicePatientService } from '../../service-patient.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css'],
})
export class LoginFormComponentComponent {
  public showPassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ServicePatientService
  ) {}

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(f: NgForm) {
    console.log(f);
    this.service
      .tryLogin(f)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;
          console.log('failed');
          return throwError(error);
        })
      )
      .subscribe((response) => {
        localStorage.setItem('LoggedInUserId', response.toString());

        // This is where you can handle the successful response
        console.log('success');
        this.router.navigate(['patient_profile']);
      });
  }

  getValue(f: any) {}
}
