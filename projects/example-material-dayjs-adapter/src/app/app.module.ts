import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { MatDayjsDateModule, MAT_DAYJS_DATE_ADAPTER_OPTIONS } from 'material-dayjs-adapter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDayjsDateModule
  ],
  providers: [
    { provide: MAT_DAYJS_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
