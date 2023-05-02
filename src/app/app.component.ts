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
  monthsFull: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  weekDay: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

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
    this.selectedDate.setUTCMonth(month);
    this.selectedDate.setUTCFullYear(year);
    this.mode = true;
  }

  monthDay(): Date[]{
    const calenderRef = new Date(this.selectedDate.getUTCFullYear(),this.selectedDate.getUTCMonth(),1);
    const calender = [...new Array(42)].map((e: number, i: number) => {
      return new Date(this.selectedDate.getUTCFullYear(),this.selectedDate.getUTCMonth(),i - (calenderRef.getDay() - 1));
    });
    console.log(calender);
    return calender;
  }
}
