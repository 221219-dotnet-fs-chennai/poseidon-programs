import { Component } from '@angular/core';

@Component({
  selector: 'app-help-bot',
  templateUrl: './help-bot.component.html',
  styleUrls: ['./help-bot.component.css']
})
export class HelpBotComponent {

  switch_exp: number;
  patient_switchexp: number;
  login_switchexp: number;
  page_switchexp: number;
  data_switchexp: number;
  doc_switchexp: number;

  value: number;

  submit(val: number) {
    this.switch_exp = val;
  }

  patient(val: number) {
    this.patient_switchexp = val;

  }

  login_problem(val: number) {
    this.login_switchexp = val;
  }

  page_problem(val: number) {
    this.page_switchexp = val;
  }

  data_problem(val: number) {
    this.data_switchexp = val;
  }

  doc_problem(val: number) {
    this.doc_switchexp = val;
  }

}
