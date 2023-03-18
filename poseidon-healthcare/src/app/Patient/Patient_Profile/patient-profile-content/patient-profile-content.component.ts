import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PatientEditDialogboxComponent } from '../patient-edit-dialogbox/patient-edit-dialogbox.component';


@Component({
  selector: 'app-patient-profile-content',
  templateUrl: './patient-profile-content.component.html',
  styleUrls: ['./patient-profile-content.component.css']
})
export class PatientProfileContentComponent {

  constructor(private router:Router, public dialog: MatDialog)
  {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PatientEditDialogboxComponent, {
      data: {},
      width: '35%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  to_book_appointment()
  {
    this.router.navigate(['patient_book_app'])
  }

  to_medicalHistory() {
    this.router.navigate(['patient_medHistory']);
  }

  to_services() {
    this.router.navigate(['service_home'])
  }
}

