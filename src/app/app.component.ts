import { Component } from '@angular/core';
import { ControllerService } from './controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Date Picker';

  // false = month select mode
  // true =day select mode

  mode: boolean = false;

  months: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  monthsFull: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  weekDay: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  constructor(public controller: ControllerService){
    document.title = this.title;
  }

  update(month: number, year: number): void{
    this.controller.month = month;
    this.controller.year = year;
    this.mode = true;
  }

  monthDay(): Date[]{
    const calenderRef = new Date(this.controller.year,this.controller.month,1);
    const calender = [...new Array(42)].map((e: number, i: number) => {
      return new Date(this.controller.year,this.controller.month,i - (calenderRef.getDay() - 1));
    });
    return calender;
  }

  Mode(date: Date): number{
    var max, min;
    if(this.controller.Selected.length === 2){
      min = Math.min(...this.controller.Selected.map(e => e.getTime()));
      max = Math.max(...this.controller.Selected.map(e => e.getTime()));
      if(min === date.getTime())
        return 2;
      else if(max === date.getTime())
        return 4;
      else if(date.getTime() > min && date.getTime() < max)
        return 3;
    }else if(this.controller.Selected.length === 1 && date.getTime() === this.controller.Selected[0].getTime()){
      return 5;
    }
    return Number(date.getUTCMonth() === this.controller.month);
  }
}
