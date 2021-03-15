import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  usData: any; 
  @Input('totalConfirmed')
  totalConfirmed;
  @Input('totalActive')
  totalActive;
  @Input('totalRecovered')
  totalRecovered;
  @Input('totalDeaths')
  totalDeaths;

  constructor() { }

  ngOnInit(): void {
    
  }

}
