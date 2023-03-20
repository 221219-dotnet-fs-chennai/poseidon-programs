import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface TestDetails {
  Id: number,
  TestName: string,
  Result: string,
  Notes: string,

}

@Component({
  selector: 'app-nurse-pat-history-dialog',
  templateUrl: './nurse-pat-history-dialog.component.html',
  styleUrls: ['./nurse-pat-history-dialog.component.css']
})
export class NursePatHistoryDialogComponent {
  constructor(private dialogRef: MatDialogRef<NursePatHistoryDialogComponent>) {

  }
  Tests: TestDetails[] = [
    { Id: 1, TestName: "Eye", Result: "good", Notes: "use computer glass" },
    { Id: 2, TestName: "Eye", Result: "good", Notes: "use computer glass" },
    { Id: 3, TestName: "Eye", Result: "good", Notes: "use computer glass" },
  ];

  testData = new MatTableDataSource(this.Tests);

  displayedColumns: string[] = ['Id', 'TestName', 'Result', 'Notes'];
}
