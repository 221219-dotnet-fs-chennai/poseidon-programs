import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicePatientService } from '../../service-patient.service';
import { catchError, throwError, pipe } from 'rxjs';
@Component({
  selector: 'app-pat-reason-dialog',
  templateUrl: './pat-reason-dialog.component.html',
  styleUrls: ['./pat-reason-dialog.component.css'],
})
export class PatReasonDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<PatReasonDialogComponent>,
    private service: ServicePatientService
  ) {}

  onSubmit(f: NgForm) {
    this.service
      .bookAppointment(f)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;
          console.log('failed');
          return throwError(error);
        })
      )
      .subscribe((response) => {
        // This is where you can handle the successful response
        console.log('success');
      });
  }

  getValue(f: any) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
