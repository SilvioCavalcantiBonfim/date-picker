import { Component } from '@angular/core';
import { ControllerService } from './controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-picker';

  // false = month select mode
  // true =day select mode

  mode: boolean = false;

  selectedDate: Date = new Date();

  months: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  constructor(public controller: ControllerService){}

  incrementYear(): void{
    this.selectedDate.setUTCFullYear(this.selectedDate.getUTCFullYear()+1);
  }

  decrementYear(): void{
    this.selectedDate.setUTCFullYear(this.selectedDate.getUTCFullYear()-1);
  }

  update(month: number, year: number): void{
    this.controller.month = month;
    this.controller.year = year;
    this.mode = true;
  }
}
