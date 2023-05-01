import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private date: Date = new Date();

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
}
