import { Component, OnInit } from '@angular/core';
import { Biscuit } from 'src/app/Biscuit';
import { BiscuitsService } from 'src/app/services/biscuits.service';


@Component({
  selector: 'app-biscuitlist',
  templateUrl: './biscuitlist.component.html',
  styleUrls: ['./biscuitlist.component.scss']
})

export class BiscuitlistComponent implements OnInit {
  biscuits: Biscuit[] = [];
  editedBiscuit:Biscuit = {"name": "", "power": 0};

  constructor(private biscuitservice: BiscuitsService) { }

  ngOnInit(): void {
    //we call the service that fetches biscuits
    this.biscuitservice.getBiscuits().subscribe((biscuits) => this.biscuits = biscuits);
  }

  deleteBiscuit(biscuit:Biscuit) {
    //we call the service that deletes biscuits
    this.biscuitservice.deleteBiscuit(biscuit).subscribe();
  }


}
