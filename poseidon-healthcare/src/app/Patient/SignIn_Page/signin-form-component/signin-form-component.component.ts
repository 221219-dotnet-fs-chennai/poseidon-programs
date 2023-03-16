import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form-component',
  templateUrl: './signin-form-component.component.html',
  styleUrls: ['./signin-form-component.component.css']
})
export class SigninFormComponentComponent {
  
  hide = true;

  signinForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      title: ['', Validators.required],
      firstnamme: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      contact_num: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

  getValue(f:any) {
    
  }
}
