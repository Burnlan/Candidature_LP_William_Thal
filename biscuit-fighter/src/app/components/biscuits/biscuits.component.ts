import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html',
  styleUrls: ['./biscuits.component.scss']
})
export class BiscuitsComponent implements OnInit {
  @Input() name = "";
  @Input() power = "";

  constructor() { }

  ngOnInit(): void {
  }

  

}
