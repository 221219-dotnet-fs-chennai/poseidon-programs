import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PatReasonDialogComponent } from '../pat-reason-dialog/pat-reason-dialog.component';
@Component({
  selector: 'app-pat-appointment-content',
  templateUrl: './pat-appointment-content.component.html',
  styleUrls: ['./pat-appointment-content.component.css']
})
export class PatAppointmentContentComponent {
  constructor(private router: Router, public dialog: MatDialog) {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PatReasonDialogComponent, {
      data: {},
      width: '35%'
    });
  }

   to_profile() {
    this.router.navigate(['patient_profile']);
  }
  
}
