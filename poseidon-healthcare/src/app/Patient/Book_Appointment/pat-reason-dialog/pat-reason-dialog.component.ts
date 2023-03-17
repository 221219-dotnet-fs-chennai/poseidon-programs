import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-pat-reason-dialog',
  templateUrl: './pat-reason-dialog.component.html',
  styleUrls: ['./pat-reason-dialog.component.css']
})
export class PatReasonDialogComponent {

  constructor(private dialogRef: MatDialogRef<PatReasonDialogComponent>){}

 onSubmit(f: NgForm) {
    console.log(f);
  }
  getValue(f:any) {
    
  }

  onNoClick(){
    this.dialogRef.close()
  }
}
