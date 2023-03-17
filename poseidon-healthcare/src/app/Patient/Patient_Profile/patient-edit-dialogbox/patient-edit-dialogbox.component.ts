import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-edit-dialogbox',
  templateUrl: './patient-edit-dialogbox.component.html',
  styleUrls: ['./patient-edit-dialogbox.component.css']
})
export class PatientEditDialogboxComponent {
  
  constructor(private dialogRef: MatDialogRef<PatientEditDialogboxComponent>){}

  onSubmit(f: NgForm) {
    console.log(f);
  }
  getValue(f:any) {
    
  }

  onNoClick(){
    this.dialogRef.close()
  }
}
