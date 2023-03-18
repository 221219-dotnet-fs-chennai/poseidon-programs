import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule,NgForm } from '@angular/forms';
@Component({
  selector: 'app-doc-med-info-edit-dialog',
  templateUrl: './doc-med-info-edit-dialog.component.html',
  styleUrls: ['./doc-med-info-edit-dialog.component.css']
})
export class DocMedInfoEditDialogComponent {
constructor(private dialog: MatDialogRef<DocMedInfoEditDialogComponent>) {
    
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
