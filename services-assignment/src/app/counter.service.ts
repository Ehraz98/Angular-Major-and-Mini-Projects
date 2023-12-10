import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  countActiveToInactive= 0;
  countInactiveToActive = 0;
  constructor() { }
}
