import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nurse-vital-content',
  templateUrl: './nurse-vital-content.component.html',
  styleUrls: ['./nurse-vital-content.component.css']
})
export class NurseVitalContentComponent {
  onSub(f:any){
    console.log(f);
  }

  allergies = new FormControl('');
  allergyList: string[] = ['Skin Allergy', 'Dust Allergy', 'Insect Allergy', 'Pet Allergy', 'Food Allergy'];

}
