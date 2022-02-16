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

  constructor(private biscuitservice: BiscuitsService) { }

  ngOnInit(): void {
    //we call the service that fetches biscuits
    this.biscuitservice.getBiscuits().subscribe((biscuits) => this.biscuits = biscuits);
  }

}
