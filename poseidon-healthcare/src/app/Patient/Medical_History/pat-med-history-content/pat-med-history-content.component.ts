import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatMedHistoryDialogComponent } from '../pat-med-history-dialog/pat-med-history-dialog.component';
import { PatMedHistoryPrescriptionDialogComponent } from '../pat-med-history-prescription-dialog/pat-med-history-prescription-dialog.component';
import { PatShowVitalComponent } from '../pat-show-vital/pat-show-vital.component';

@Component({
  selector: 'app-pat-med-history-content',
  templateUrl: './pat-med-history-content.component.html',
  styleUrls: ['./pat-med-history-content.component.css']
})
export class PatMedHistoryContentComponent {
   constructor(private router:Router,public dialog:MatDialog)
  {

  }
  to_profile() {
    this.router.navigate(['patient_profile']);
  }
  
   openDialog(): void {
    const dialogRef = this.dialog.open(PatMedHistoryDialogComponent, {
      data: {},
      width: '40%'
    });
   }
  
  openPrescriptionDialog(): void{
     const dialogRef = this.dialog.open(PatMedHistoryPrescriptionDialogComponent, {
      data: {},
      width: '40%'
    });
  }

  openvitals()
  {
   const dialogRef = this.dialog.open(PatShowVitalComponent, {
    data: {},
    width: '40%'
   }); 
  }
}
