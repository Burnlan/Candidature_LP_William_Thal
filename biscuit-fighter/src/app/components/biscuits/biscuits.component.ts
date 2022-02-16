import { Component, OnInit, Input } from '@angular/core';
import { Biscuit } from 'src/app/Biscuit';

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html',
  styleUrls: ['./biscuits.component.scss']
})
export class BiscuitsComponent implements OnInit {
  @Input() biscuit!: Biscuit;

  constructor() { 
  }

  ngOnInit(): void {
  }
  
}
