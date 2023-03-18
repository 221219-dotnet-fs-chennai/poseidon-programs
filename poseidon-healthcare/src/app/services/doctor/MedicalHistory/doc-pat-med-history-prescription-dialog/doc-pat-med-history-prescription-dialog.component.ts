import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-doc-pat-med-history-prescription-dialog',
  templateUrl: './doc-pat-med-history-prescription-dialog.component.html',
  styleUrls: ['./doc-pat-med-history-prescription-dialog.component.css']
})
export class DocPatMedHistoryPrescriptionDialogComponent {
 constructor(private dialogRef: MatDialogRef<DocPatMedHistoryPrescriptionDialogComponent>) {
    
  }
  Prescriptions: PrescriptionData[] = [
    { Id: 1, Medicine: "Paracetamol", Dosage: "1-0-1", Notes: "after food" },
    { Id: 2, Medicine: "Dolo", Dosage: "1-0-1", Notes: "after food" },
     { Id: 3, Medicine: "Pan40", Dosage: "1-0-1", Notes: "after food" },
    
  ];
  
  Prescription = new MatTableDataSource(this.Prescriptions);

  displayedColumns: string[] = ['Id','TestName','Result','Notes'];
}





export interface PrescriptionData {
  Id : number,	
  Medicine:string,	
  Dosage:string,	
  Notes:string,

} 
