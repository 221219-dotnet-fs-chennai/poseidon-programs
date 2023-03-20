import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NursePatHistoryDialogComponent } from '../nurse-pat-history-dialog/nurse-pat-history-dialog.component';
import { NursePatHistoryPrescriptionComponent } from '../nurse-pat-history-prescription/nurse-pat-history-prescription.component';


@Component({
  selector: 'app-nurse-pat-content',
  templateUrl: './nurse-pat-content.component.html',
  styleUrls: ['./nurse-pat-content.component.css']
})
export class NursePatContentComponent {
  constructor(private router: Router, public dialog: MatDialog) {

  }
  to_nurse_appoint() {
    this.router.navigate(['nurse_appointment']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NursePatHistoryDialogComponent, {
      data: {},
      width: '40%'
    });
  }

  openPrescriptionDialog(): void {
    const dialogRef = this.dialog.open(NursePatHistoryPrescriptionComponent, {
      data: {},
      width: '40%'
    });
  }
}
