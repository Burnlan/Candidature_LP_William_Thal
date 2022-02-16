import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biscuitlist',
  templateUrl: './biscuitlist.component.html',
  styleUrls: ['./biscuitlist.component.scss']
})
export class BiscuitlistComponent implements OnInit {
  "biscuits" = [
    {"name": "Oréo", "power": 5},
    {"name": "Twix", "power": 3},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
