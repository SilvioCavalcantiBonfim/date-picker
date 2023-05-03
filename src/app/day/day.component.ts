import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input() value: number = 0;
  @Input() mode: number = 0;

  @Output() click = new EventEmitter<void>();

  // 0 - disable
  // 1 - default
  // 2 - selected start
  // 3 - selected middle
  // 4 - selected end

  classes(): any{
    switch (this.mode) {
      case 5:
        return [['dayContainer', 'selected', 'end', 'start'], ['enphasis']];
      case 4:
        return [['dayContainer', 'selected', 'end'], ['enphasis']];
      case 3:
        return [['dayContainer', 'selected'], ['enphasis']];
      case 2:
        return [['dayContainer', 'selected', 'start'], ['enphasis']];
      case 1:
        return [['dayContainer', 'def'], ['default']];
      default:
        return [['dayContainer', 'def', 'disabled'], ['default']];
    }
  }
}
