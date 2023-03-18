import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
export interface PrescriptionData {
  Id : number,	
  Medicine:string,	
  Dosage:string,	
  Notes:string,

} 
@Component({
  selector: 'app-doc-med-info-view-prescription-dialog',
  templateUrl: './doc-med-info-view-prescription-dialog.component.html',
  styleUrls: ['./doc-med-info-view-prescription-dialog.component.css']
})
export class DocMedInfoViewPrescriptionDialogComponent {
  constructor(private dialog: MatDialogRef<DocMedInfoViewPrescriptionDialogComponent>) {
    
  }

   Prescriptions: PrescriptionData[] = [
    { Id: 1, Medicine: "Paracetamol", Dosage: "1-0-1", Notes: "after food" },
    { Id: 2, Medicine: "Dolo", Dosage: "1-0-1", Notes: "after food" },
     { Id: 3, Medicine: "Pan40", Dosage: "1-0-1", Notes: "after food" },
    
  ];
  
  Prescription = new MatTableDataSource(this.Prescriptions);

  displayedColumns: string[] = ['Id','TestName','Result','Notes'];

}
