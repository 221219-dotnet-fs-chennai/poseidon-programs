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
  allergies = new FormControl('');
  allergyList: string[] = ['Skin Allergy', 'Dust Allergy', 'Insect Allergy', 'Pet Allergy', 'Food Allergy'];
  

  sendData(bp:number,rr:number,temp:number,height:number,weight:number,notes:string){
    
    this.vitalsService.postData(bp,rr,temp,height,weight,notes).subscribe(data=>{
      if(data){
        console.log("in sendData");
        console.log(this.vitalsService.myData);
        this.vitalsService.myData.acceptance=2;
        this.vitalsService.update(this.vitalsService.myData).subscribe(data=>console.log(data));
        window.location.reload();
        console.log(this.vitalsService.myData);
      }
    })
  
    this.dialogRef.close();
  }
  close(){
        this.dialogRef.close();
  }
  ngOnInit(): void {
    
  }
  

}
