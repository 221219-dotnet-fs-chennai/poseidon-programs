import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-doctor',
  templateUrl: './admin-add-doctor.component.html',
  styleUrls: ['./admin-add-doctor.component.css']
})
export class AdminAddDoctorComponent {

  constructor(private router: Router)
  {

  }
  onSubmit(f: NgForm) {
    console.log(f);
  }

  getValue(f: any) {

  }

  to_admin()
  {
    this.router.navigate(['adminhome'])
  }
  
}
