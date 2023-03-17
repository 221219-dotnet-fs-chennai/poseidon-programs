import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponentComponent {
  
  public showPassword: boolean = false;

  constructor(private fb: FormBuilder, private route: Router) { }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(f: NgForm) {
    console.log(f)
    this.route.navigate(['patient_profile'])
  }

  getValue(f:any) {
    
  }

}
