import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


export interface TestDetails {
  Id: number,
  VitalName: string,
  VitalResult: string,
}

@Component({
  selector: 'app-pat-show-vital',
  templateUrl: './pat-show-vital.component.html',
  styleUrls: ['./pat-show-vital.component.css']
})
export class PatShowVitalComponent {
  constructor(private dialogRef: MatDialogRef<PatShowVitalComponent>) {
  }
  Tests: TestDetails[] = [
    { Id: 1, VitalName: "Blood Pressure", VitalResult: "120/80 mm HG" },
    { Id: 2, VitalName: "Temperature ", VitalResult: "102" },
    { Id: 3, VitalName: "Height ", VitalResult: "174 cm" },
    { Id: 4, VitalName: "Weight ", VitalResult: "65 kg" },
    { Id: 5, VitalName: "Sugar Level ", VitalResult: "140 mg/dl" },
    { Id: 6, VitalName: "Allergies ", VitalResult: "Pet allergy, Dust allergy" },
  ];

  testData = new MatTableDataSource(this.Tests);

  displayedColumns: string[] = ['Id', 'TestName', 'Result'];

}
