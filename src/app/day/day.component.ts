import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input() value: number = 0;
  @Input() mode: number = 0;
  // 0 - disable
  // 1 - default
  // 2 - selected
}
