import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicePatientService } from '../../service-patient.service';


@Component({
  selector: 'app-patient-edit-dialogbox',
  templateUrl: './patient-edit-dialogbox.component.html',
  styleUrls: ['./patient-edit-dialogbox.component.css']
})
export class PatientEditDialogboxComponent  {
  
  constructor(private dialogRef: MatDialogRef<PatientEditDialogboxComponent>,private service:ServicePatientService){}

  onSubmit(f: NgForm) {
    this.service.updatePersonalDetails(13,f);
  }
  getValue(f:any) {
    
  }

  onNoClick(){
    this.dialogRef.close()
  }

}
