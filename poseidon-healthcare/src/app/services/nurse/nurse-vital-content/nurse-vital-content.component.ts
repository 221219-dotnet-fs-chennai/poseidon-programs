import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { NurseAppointmentContentComponent } from '../nurse_appointment/nurse-appointment-content/nurse-appointment-content.component';
import { ServicenurseService } from '../servicenurse.service';

@Component({
  selector: 'app-nurse-vital-content',
  templateUrl: './nurse-vital-content.component.html',
  styleUrls: ['./nurse-vital-content.component.css']
})
export class NurseVitalContentComponent implements OnInit {

  constructor(private vitalsService:ServicenurseService,private dialogRef:MatDialogRef<NurseVitalContentComponent>,private router: Router){}
  doctorName:any;
  allergies:any;
  allergyList: string[] = ['Skin Allergy', 'Dust Allergy', 'Insect Allergy', 'Pet Allergy', 'Food Allergy'];
  

  sendData(bp:number,rr:number,temp:number,height:number,weight:number,notes:string,bps:number,bg:string){
    
    this.vitalsService.postData(bp,rr,temp,height,weight,notes,bps,bg).subscribe(data=>{
      if(data){
        console.log("in sendData");
        console.log(this.vitalsService.myData);
        this.vitalsService.myData.acceptance=2;
        this.vitalsService.update(this.vitalsService.myData).subscribe(data=>console.log(data));
        window.location.reload();
        console.log(this.vitalsService.myData);
      }
    })
  alert("data added successfully");
    this.dialogRef.close();
  }
  close(){
        this.dialogRef.close();
  }
  ngOnInit(): void {
    this.vitalsService.getDoctorData(this.vitalsService.myData.physicianEmail).subscribe((data)=>
    {
      this.doctorName=data.name;
    })
  }
  
  allergyChange(val:any){
          console.log(val);
          console.log(this.allergies);
  }

}
