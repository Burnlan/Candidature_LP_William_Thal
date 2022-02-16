import { Component, OnInit } from '@angular/core';
import { Biscuit } from 'src/app/Biscuit';
import { BiscuitsService } from 'src/app/services/biscuits.service';

@Component({
  selector: 'app-add-biscuit-form',
  templateUrl: './add-biscuit-form.component.html',
  styleUrls: ['./add-biscuit-form.component.scss']
})
export class AddBiscuitFormComponent implements OnInit {

//our properties
  name: string = "";
  power: number = 0;

  constructor(private biscuitservice: BiscuitsService) { }

  ngOnInit(): void {
  }

  createBiscuit() {
    const newBiscuit = {
      name: this.name,
      power: this.power
    }
    //we call the service
    this.biscuitservice.createBiscuit(newBiscuit).subscribe();

    this.name = "";
    this.power = 0;
  }

}
