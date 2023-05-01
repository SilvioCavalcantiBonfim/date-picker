import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {
  @Input() month: string = '';
  @Input() enabled: boolean = false;
}
