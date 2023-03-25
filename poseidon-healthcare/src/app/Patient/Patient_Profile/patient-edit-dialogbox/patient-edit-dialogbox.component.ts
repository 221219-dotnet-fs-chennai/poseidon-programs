import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicePatientService } from '../../service-patient.service';
import { catchError, throwError, pipe } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-edit-dialogbox',
  templateUrl: './patient-edit-dialogbox.component.html',
  styleUrls: ['./patient-edit-dialogbox.component.css']
})
export class PatientEditDialogboxComponent  {
  
  constructor(private dialogRef: MatDialogRef<PatientEditDialogboxComponent>,private service:ServicePatientService,private router:Router){}

  onSubmit(f: NgForm) {
    this.service.updatePersonalDetails(13,f).pipe(
  catchError(error => {
    const statusCode = error.status;
    console.log("failed");
    return throwError(error);
  })
).subscribe(response => {
  // This is where you can handle the successful response
  console.log("success");
  this.router.navigateByUrl('/patient_book_app', { skipLocationChange: false });
  
  this.router.navigate(['patient_profile']);
  
 

});
  }
  getValue(f:any) {
    
  }

  onNoClick(){
    this.dialogRef.close()
  }

}
