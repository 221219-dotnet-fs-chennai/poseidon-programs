import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NurseVitalContentComponent } from '../../nurse-vital-content/nurse-vital-content.component';
import { items, ServicenurseService } from '../../servicenurse.service';


@Component({
  selector: 'app-nurse-appointment-content',
  templateUrl: './nurse-appointment-content.component.html',
  styleUrls: ['./nurse-appointment-content.component.css']
})
export class NurseAppointmentContentComponent implements OnInit {

  currentDate = new Date();
  
  listofappointment!:items[];
  constructor(private dialog: MatDialog, private router: Router ,private service:ServicenurseService) 
  {
    this.service.getData().subscribe(data=>{
      console.warn(data)
        
   });
    

  }
  infoDialog() {
    const dRef = this.dialog.open(NurseVitalContentComponent, {
      width: '500px',
      data: {}
    });
    dRef.afterClosed().subscribe(result => {
      console.log(`result is ${result}`)
    })
  }

  tomedic_info()
  {
    this.router.navigate(['nurse-pat-info'])
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   
  ngOnInit() 
  {


    this.fetechappointment();
 
  }

dataSource:any;
fetechappointment()
{
  this.service.getData().subscribe(data=>
    {
      this.listofappointment=data;

      this.dataSource=new MatTableDataSource(this.listofappointment);
      console.log('list of appointment',this.listofappointment);
    })
}

  public displayedColumns: string[] = ['Patient Name', 'Booked On', 'Key Notes', 'Diagnosis', 'Medical History'];
 


  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }



}
