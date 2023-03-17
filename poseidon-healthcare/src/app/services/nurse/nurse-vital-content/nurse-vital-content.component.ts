import { Component } from '@angular/core';

@Component({
  selector: 'app-nurse-vital-content',
  templateUrl: './nurse-vital-content.component.html',
  styleUrls: ['./nurse-vital-content.component.css']
})
export class NurseVitalContentComponent {
  onSub(f:any){
    console.log(f);
  
  }
}
