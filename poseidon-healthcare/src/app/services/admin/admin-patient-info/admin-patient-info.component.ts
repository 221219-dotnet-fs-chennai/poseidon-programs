import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'AveshKhan', email: 'AveshKhan@gmail.com', phone: '6309900776' },
  { id: 2, name: 'Ajith', email: 'Ajith@gmail.com', phone: '8956794587' },
  { id: 3, name: 'Mani', email: 'Mani@gmail.com', phone: '7323632376' },
  { id: 4, name: 'Mahesh', email: 'Mahesh@gmail.com', phone: '8348748748' },
  { id: 5, name: 'Abdul', email: 'Abdul@gmail.com', phone: '6253636327' },
  { id: 6, name: 'Manoj', email: 'Manoj@gmail.com', phone: '8575347385' },
  { id: 7, name: 'Harry potter', email: 'Harrypotter@gmail.com', phone: '234 453 4576' },
  { id: 8, name: 'Robert', email: 'Robert@gmail.com', phone: '412 234 8376' },
  { id: 9, name: 'Banner', email: 'Banner@gmail.com', phone: '321 365 3479' },
  { id: 10, name: 'Clint', email: 'Clint@gmail.com', phone: '220 483 3484' },

];

@Component({
  selector: 'app-admin-patient-info',
  templateUrl: './admin-patient-info.component.html',
  styleUrls: ['./admin-patient-info.component.css']
})
export class AdminPatientInfoComponent implements OnInit {
  
  displayedColumns: string[] = ['ID', 'Patient Name', 'Email', 'Phone'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
