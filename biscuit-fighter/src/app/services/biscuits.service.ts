import { Injectable } from '@angular/core';
import { Biscuit } from 'src/app/Biscuit';

@Injectable({
  providedIn: 'root'
})

export class BiscuitsService {

  constructor() { }

  getBiscuits():Biscuit[] {
    const BISCUITS:Biscuit[] = [
      {
        name: "Oréo", 
        power: 5
      },
      {
        name: "Twix", 
        power: 3
      },
    ];

    return BISCUITS;
  }

}
