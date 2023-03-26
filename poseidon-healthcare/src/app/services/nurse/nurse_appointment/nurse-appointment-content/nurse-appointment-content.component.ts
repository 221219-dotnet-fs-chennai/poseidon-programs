import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
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
  constructor(private dialog: MatDialog, private router: Router ,private service:ServicenurseService) 
  {
    this.fetechappointment();
  }
  infoDialog(element:any) {
    const dRef = this.dialog.open(NurseVitalContentComponent, {
      width: '500px',
      data: {
  
      }
    });
    this.service.myData=element;
    dRef.afterClosed().subscribe(result => {
      // if(this.service.myData.acceptance!=1){
        // this.fetechappointment();
         

      // }
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


    // this.fetechappointment();
 
  }

dataSource:any;
fetechappointment()
{
  this.service.getData().subscribe(data=>
    {
      
      let listArray: any[]=[];
      data.forEach( (element: any) => {
        if(element.acceptance==1){

          listArray.push(element);
        }
      });

      this.dataSource=new MatTableDataSource(listArray);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      console.log(listArray);
    })
}

  public displayedColumns: string[] = ['Patient Name', 'Booked On', 'Key Notes', 'Diagnosis', 'Medical History'];
 






}
