import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DocAddTestDialogComponent } from '../doc-add-test-dialog/doc-add-test-dialog.component';
import { DocMedInfoAddPrescriptionDialogComponent } from '../doc-med-info-add-prescription-dialog/doc-med-info-add-prescription-dialog.component';
import { DocMedInfoEditDialogComponent } from '../doc-med-info-edit-dialog/doc-med-info-edit-dialog.component';
import { DocMedInfoViewPrescriptionDialogComponent } from '../doc-med-info-view-prescription-dialog/doc-med-info-view-prescription-dialog.component';

@Component({
  selector: 'app-doc-update-med-info-content',
  templateUrl: './doc-update-med-info-content.component.html',
  styleUrls: ['./doc-update-med-info-content.component.css']
})
export class DocUpdateMedInfoContentComponent {

  constructor(private dialog: MatDialog,private router:Router) {
    
  }

  openViewPrescription() {
    const prescription = this.dialog.open(DocMedInfoViewPrescriptionDialogComponent, {
      data: {},
      width: '40%'
    });
  }

   openAddPrescription() {
    const prescription = this.dialog.open(DocMedInfoAddPrescriptionDialogComponent, {
      data: {},
      width: '40%'
    });
   }
  
  openAddNewObservation() {
       const prescription = this.dialog.open(DocAddTestDialogComponent, {
      data: {},
      width: '40%'
    });
  }

  to_MedHistory() {
   this.router.navigate(['doc/patient_medicalHistory']);
  }

  to_appointments() {
    this.router.navigate(['docacceptedappointments']);

  }
   
  }



