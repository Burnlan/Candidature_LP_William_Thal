import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-biscuit-form',
  templateUrl: './add-biscuit-form.component.html',
  styleUrls: ['./add-biscuit-form.component.scss']
})
export class AddBiscuitFormComponent implements OnInit {
//our properties
  name: string = "";
  power: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
