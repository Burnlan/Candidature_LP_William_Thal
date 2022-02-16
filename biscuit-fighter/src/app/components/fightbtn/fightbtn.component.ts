import { Component, OnInit } from '@angular/core';
import { BiscuitsService } from 'src/app/services/biscuits.service';

@Component({
  selector: 'app-fightbtn',
  templateUrl: './fightbtn.component.html',
  styleUrls: ['./fightbtn.component.scss']
})
export class FightbtnComponent implements OnInit {

  fightResult:String = "";

  constructor(private biscuitservice: BiscuitsService) { }

  ngOnInit(): void {
  }

  fight() {
    //we call the service that makes biscuits fight
    this.biscuitservice.fightBiscuits().subscribe((result) => this.fightResult = result);
  }

}
