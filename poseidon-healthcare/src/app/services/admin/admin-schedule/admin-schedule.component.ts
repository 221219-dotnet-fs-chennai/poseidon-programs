import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NewAvailabilityComponent } from '../new-availability/new-availability.component';


export interface PeriodicElement {
  name: string;
  id: number;
  from: string;
  till: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Cyrus', from: '12-12-2022', till: '1-01-2023' },

];

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Doctor Name', 'Available From', 'Available Till', 'info'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private dialog: MatDialog, private router: Router) { }
  infoDialogs() {
    const dRef = this.dialog.open(NewAvailabilityComponent, {
      width: '500px',
      data: {}
    });
    dRef.afterClosed().subscribe(result => {
      console.log(`result is ${result}`)
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  to_admin()
  {
    this.router.navigate(['adminhome'])
  }
}
