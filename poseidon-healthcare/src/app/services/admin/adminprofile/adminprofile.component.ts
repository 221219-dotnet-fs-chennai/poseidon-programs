import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  constructor(private router: Router){}

  to_schedule()
  {
    this.router.navigate(['admin_schedule'])
  }
}