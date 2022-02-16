import { Component, OnInit, Input, Output } from '@angular/core';
import { Biscuit } from 'src/app/Biscuit';
import { EventEmitter } from '@angular/core';
import { BiscuitsService } from 'src/app/services/biscuits.service';

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html',
  styleUrls: ['./biscuits.component.scss']
})
export class BiscuitsComponent implements OnInit {
  @Input() biscuit!: Biscuit;
  @Output() deleteBiscuit: EventEmitter<Biscuit> = new EventEmitter();
  @Output() updateBiscuit: EventEmitter<Biscuit> = new EventEmitter();

  isEdit = false;
  editBtnText = "Edit";

  name = "";
  power = 0;

  constructor(private biscuitservice: BiscuitsService) { 
  }

  ngOnInit(): void {
  }

  //deletion method
  delete(biscuit:Biscuit){
    this.deleteBiscuit.emit(biscuit);
  }

  showEditPanel(){
    if(this.isEdit === false){
      this.isEdit = true;
      this.editBtnText ="Close";
    } else {
      this.isEdit = false;
      this.editBtnText ="Edit";
    }
    
  }
  //We emit the update event
  update(){
    const editedBiscuit:Biscuit = {
      _id: this.biscuit._id,
      name: this.name,
      power: this.power
    }
    this.biscuitservice.updateBiscuit(editedBiscuit).subscribe();
  }

}
