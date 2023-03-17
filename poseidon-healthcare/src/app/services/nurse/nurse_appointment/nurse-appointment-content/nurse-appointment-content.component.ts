import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NurseVitalContentComponent } from '../../nurse-vital-content/nurse-vital-content.component';

export interface PeriodicElement {
  name: string;
  id: number;
  booked: string;
  notes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Cyrus', booked: '12-12-2022', notes: 'Fever' },
  { id: 2, name: 'Fapper Ben', booked: '1-1-2023', notes: 'Severe Stomach ache' },
  { id: 3, name: 'Rose Mart', booked: '2-1-2023', notes: 'Skin Allergy' },
  { id: 1, name: 'Cyrus', booked: '12-12-2022', notes: 'Fever' },
  { id: 2, name: 'Fapper Ben', booked: '1-1-2023', notes: 'Severe Stomach ache' },
  { id: 3, name: 'Rose Mart', booked: '2-1-2023', notes: 'Skin Allergy' },
  { id: 1, name: 'Cyrus', booked: '12-12-2022', notes: 'Fever' },
  { id: 2, name: 'Fapper Ben', booked: '1-1-2023', notes: 'Severe Stomach ache' },
  { id: 3, name: 'Rose Mart', booked: '2-1-2023', notes: 'Skin Allergy' },
  { id: 1, name: 'Cyrus', booked: '12-12-2022', notes: 'Fever' },
  { id: 2, name: 'Fapper Ben', booked: '1-1-2023', notes: 'Severe Stomach ache' },
  { id: 3, name: 'Rose Mart', booked: '2-1-2023', notes: 'Skin Allergy' },
  { id: 1, name: 'Cyrus', booked: '12-12-2022', notes: 'Fever' },
  { id: 2, name: 'Fapper Ben', booked: '1-1-2023', notes: 'Severe Stomach ache' },
  { id: 3, name: 'Rose Mart', booked: '2-1-2023', notes: 'Skin Allergy' },
  { id: 1, name: 'Cyrus', booked: '12-12-2022', notes: 'Fever' },
  { id: 2, name: 'Fapper Ben', booked: '1-1-2023', notes: 'Severe Stomach ache' },
  { id: 3, name: 'Rose Mart', booked: '2-1-2023', notes: 'Skin Allergy' },
  { id: 1, name: 'Cyrus', booked: '12-12-2022', notes: 'Fever' },
  { id: 2, name: 'Fapper Ben', booked: '1-1-2023', notes: 'Severe Stomach ache' },
  { id: 3, name: 'Rose Mart', booked: '2-1-2023', notes: 'Skin Allergy' },
];

@Component({
  selector: 'app-nurse-appointment-content',
  templateUrl: './nurse-appointment-content.component.html',
  styleUrls: ['./nurse-appointment-content.component.css']
})
export class NurseAppointmentContentComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Patient Name', 'Booked On', 'Key Notes', 'Diagnosis'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private dialog: MatDialog) { }
  infoDialog() {
    const dRef = this.dialog.open(NurseVitalContentComponent, {
      width: '500px',
      data: {}
    });
    dRef.afterClosed().subscribe(result => {
      console.log(`result is ${result}`)
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {


    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
