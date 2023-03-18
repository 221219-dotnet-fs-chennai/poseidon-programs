import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DocMedInfoEditDialogComponent } from '../doc-med-info-edit-dialog/doc-med-info-edit-dialog.component';

export interface tests{
  Id: number;
  test: string;
  result: string;
  notes: string;

}

@Component({
  selector: 'app-doc-update-med-info-table',
  templateUrl: './doc-update-med-info-table.component.html',
  styleUrls: ['./doc-update-med-info-table.component.css']
})
export class DocUpdateMedInfoTableComponent {

  constructor(private dialog: MatDialog) {
    
  }
  @ViewChild('paginator') paginator: MatPaginator;

  testList: tests[] = [
      { Id: 1, test: "Eye", result: "good", notes: "use computer glass" },
     { Id: 2, test: "Eye",result: "good", notes: "use computer glass" },
    { Id:3, test: "Eye", result: "good", notes: "use computer glass" }
  ];
  
  listOfTest = new MatTableDataSource(this.testList);
  displayedColumns:string[] = ['Id', 'test', 'notes', 'result','edit','delete'];

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.listOfTest.paginator = this.paginator;
  }

  
    openEditObservation() {
       const prescription = this.dialog.open(DocMedInfoEditDialogComponent, {
      data: {},
      width: '40%'
    });
  }

}
