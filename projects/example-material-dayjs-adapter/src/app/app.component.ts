import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/nl';
import 'dayjs/locale/de';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dateAdapter: DateAdapter<Dayjs>) { }

  setLocale(locale: string) {
    dayjs.locale(locale);
    this.dateAdapter.setLocale(locale);
  }
}
