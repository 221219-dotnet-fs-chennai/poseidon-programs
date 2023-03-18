import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-doc-med-info-add-prescription-dialog',
  templateUrl: './doc-med-info-add-prescription-dialog.component.html',
  styleUrls: ['./doc-med-info-add-prescription-dialog.component.css']
})
export class DocMedInfoAddPrescriptionDialogComponent {

  constructor(private dialog: MatDialogRef<DocMedInfoAddPrescriptionDialogComponent>) {
    
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
