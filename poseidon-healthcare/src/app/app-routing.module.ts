import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorhomeComponent } from './services/doctor/doctorhome/doctorhome.component';

const routes: Routes = [
  {path:'doctorhome',component:DoctorhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
