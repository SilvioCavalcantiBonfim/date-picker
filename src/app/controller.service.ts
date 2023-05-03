import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private date: Date = new Date();

  private selected: Date[] = [];

  private index: number = 0;

  constructor() {}

  get year(): number{
    return this.date.getUTCFullYear();
  }

  get month(): number{
    return this.date.getUTCMonth();
  }

  set year(v : number) {
    this.date.setUTCFullYear(v);
  }

  set month(v : number) {
    this.date.setUTCMonth(v);
  }

  incrementYear(): void{
    this.date.setUTCFullYear(this.date.getUTCFullYear() + 1);
  }

  decrementYear(): void{
    this.date.setUTCFullYear(this.date.getUTCFullYear() - 1);
  }

  incrementMonth(): void{
    this.date.setUTCMonth(this.date.getUTCMonth() + 1);
  }
  
  decrementMonth(): void{
    this.date.setUTCMonth(this.date.getUTCMonth() - 1);
  }

  setDateSelected(date: Date):void{
    if (this.index === 0) {
      this.selected = [date];
    }else{
      this.selected = [...this.selected, date];
    }
    this.index = (this.index+1)%2;
  }

  
  get Selected() : Date[]{
    return this.selected;
  }
  
}
