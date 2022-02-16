import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biscuit',
  templateUrl: './biscuit.component.html',
  styleUrls: ['./biscuit.component.scss']
})
export class BiscuitComponent implements OnInit {

  name = "Oréo";

  constructor() { }

  ngOnInit(): void {
  }

}
