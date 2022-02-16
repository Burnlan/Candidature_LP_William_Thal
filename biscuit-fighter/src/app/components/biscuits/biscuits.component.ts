import { Component, OnInit, Input, Output } from '@angular/core';
import { Biscuit } from 'src/app/Biscuit';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html',
  styleUrls: ['./biscuits.component.scss']
})
export class BiscuitsComponent implements OnInit {
  @Input() biscuit!: Biscuit;
  @Output() deleteBiscuit: EventEmitter<Biscuit> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  //deletion method
  delete(biscuit:Biscuit){
    this.deleteBiscuit.emit(biscuit);
  }
  
}
