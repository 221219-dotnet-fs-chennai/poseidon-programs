import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicenurseService } from '../servicenurse.service';

@Component({
  selector: 'app-nurse-vital-content',
  templateUrl: './nurse-vital-content.component.html',
  styleUrls: ['./nurse-vital-content.component.css']
})
export class NurseVitalContentComponent {

  constructor(private vitalsService:ServicenurseService){}
  allergies = new FormControl('');
  allergyList: string[] = ['Skin Allergy', 'Dust Allergy', 'Insect Allergy', 'Pet Allergy', 'Food Allergy'];

  sendData(bp:number,rr:number,temp:number,height:number,weight:number,notes:string){
    
    this.vitalsService.postData(bp,rr,temp,height,weight,notes).subscribe(data=>{
      console.log(data);
    })
  }
  

}
