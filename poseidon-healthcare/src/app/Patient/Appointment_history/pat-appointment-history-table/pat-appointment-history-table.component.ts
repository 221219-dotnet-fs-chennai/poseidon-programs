
import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { items,ServicePatientService } from '../../service-patient.service';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';

export interface appointmentHistory{
  Id: number,
  Date:string,
  Doctor: string,
  Notes: string,
  Status: string,

}

@Component({
  selector: 'app-pat-appointment-history-table',
  templateUrl: './pat-appointment-history-table.component.html',
  styleUrls: ['./pat-appointment-history-table.component.css'],
})

export class PatAppointmentHistoryTableComponent implements OnInit,AfterViewInit{

  listofappointment!:items[];

  constructor(private service:ServicePatientService)
  {
    this.service.getData().subscribe(data=>{
      console.warn(data)

    });
  }
  
  @ViewChild('paginator') paginator: MatPaginator;

  // history: appointmentHistory[] = [
  //   { Id: 1, Date: "18-Mar-2023", Doctor: "Andrews", Notes: "Eye", Status: "Pending" },
  //   { Id: 2, Date: "18-Mar-2023", Doctor: "George", Notes: "fever", Status: "Completed" },
  //   { Id: 3, Date: "18-Mar-2023", Doctor: "sheena", Notes: "tongue", Status: "Approved" },
  //   { Id: 4, Date: "19-Mar-2023", Doctor: "Tyler", Notes: "Root Canal", Status: "Rejected" },
  //   { Id: 5, Date: "19-Mar-2023", Doctor: "Shawn", Notes: "Root Canal", Status: "Rejected" },
  //   {Id:6,Date:"19-Mar-2023",Doctor:"Lopez",Notes:"Stomach ache",Status:"Accepted"},
  // ];

 


  //appointmentStatus = new MatTableDataSource(this.history);
  
  displayedColumns: string[] = ['Id','Date', 'Doctor', 'Notes', 'Status'];
  dataSource:any;

  ngOnInit() 
  {
    this.fetechappointment();
 
  }



  idArray:number[]=[];

  fetechappointment()
  {
    this.service.getData().subscribe(data=>
      {
        this.listofappointment=data;

        this.dataSource=new MatTableDataSource(this.listofappointment);
        this.dataSource.paginator = this.paginator;
        console.log('list of appointment',this.dataSource);
    
      })
  }

    
  ngAfterViewInit(): void
   {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.dataSource.paginator = this.paginator;
     
  }
  id:number=0;
 

}  


