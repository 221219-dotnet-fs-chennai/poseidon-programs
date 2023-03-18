import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule,NgForm } from '@angular/forms';
@Component({
  selector: 'app-doc-add-test-dialog',
  templateUrl: './doc-add-test-dialog.component.html',
  styleUrls: ['./doc-add-test-dialog.component.css']
})
export class DocAddTestDialogComponent {
  constructor(private dialog: MatDialogRef<DocAddTestDialogComponent>) {
    
  }

   onSubmit(f: NgForm) {
    console.log(f);
  }
  getValue(f:any) {
    
  }

  onNoClick(){
    this.dialog.close()
  }

}
