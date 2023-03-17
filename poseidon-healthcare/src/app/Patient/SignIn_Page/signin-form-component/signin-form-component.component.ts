import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form-component',
  templateUrl: './signin-form-component.component.html',
  styleUrls: ['./signin-form-component.component.css']
})
export class SigninFormComponentComponent {
  
  onSubmit(f: NgForm) {
    console.log(f);
  }

  getValue(f:any) {
    
  }
}
