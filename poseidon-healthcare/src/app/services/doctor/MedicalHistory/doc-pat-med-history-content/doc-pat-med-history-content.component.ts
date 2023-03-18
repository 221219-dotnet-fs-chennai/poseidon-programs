import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocPatMedHistoryPrescriptionDialogComponent } from '../doc-pat-med-history-prescription-dialog/doc-pat-med-history-prescription-dialog.component';
import { DocPatMedHistoryTestDialogComponent } from '../doc-pat-med-history-test-dialog/doc-pat-med-history-test-dialog.component';
@Component({
  selector: 'app-doc-pat-med-history-content',
  templateUrl: './doc-pat-med-history-content.component.html',
  styleUrls: ['./doc-pat-med-history-content.component.css']
})
export class DocPatMedHistoryContentComponent {
   constructor(private router:Router,public dialog:MatDialog)
  {

   }
  to_UpdateMedInfo() {
    this.router.navigate(['update_medInfo']);
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DocPatMedHistoryTestDialogComponent, {
      data: {},
      width: '40%'
    });
   }
  
  openPrescriptionDialog(): void{
     const dialogRef = this.dialog.open(DocPatMedHistoryPrescriptionDialogComponent, {
      data: {},
      width: '40%'
    });
  }
}
