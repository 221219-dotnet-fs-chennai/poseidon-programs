import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-doc-pat-med-history-test-dialog',
  templateUrl: './doc-pat-med-history-test-dialog.component.html',
  styleUrls: ['./doc-pat-med-history-test-dialog.component.css']
})
export class DocPatMedHistoryTestDialogComponent {


  
  constructor(private dialogRef: MatDialogRef<DocPatMedHistoryTestDialogComponent>) {
    
   
    
  }
   Tests: TestDetails[] = [
     { Id: 1, TestName: "Eye", Result: "good", Notes: "use computer glass" },
     { Id: 2, TestName: "Eye", Result: "good", Notes: "use computer glass" },
    { Id:3, TestName: "Eye", Result: "good", Notes: "use computer glass" },
   ];
  
  testData = new MatTableDataSource(this.Tests);

  displayedColumns: string[] = ['Id','TestName','Result','Notes'];
}





export interface TestDetails {
  Id : number,	
  TestName:string,	
  Result:string,	
  Notes:string,

} 

