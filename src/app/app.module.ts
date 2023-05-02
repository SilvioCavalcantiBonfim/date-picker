import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    DayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
