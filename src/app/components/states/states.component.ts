import { Component, OnInit } from '@angular/core';
import { CovidStatsService } from '../data-service';
import { StateData } from './state-data.interface';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  stateData : StateData[];
  totalConfirmed = 0;
  totalActive = 0;
  totalRecovered = 0;
  totalDeaths = 0;
  
loading=true;
  constructor(private statsService: CovidStatsService) { }

  ngOnInit(): void {
    this.statsService.getStateData().
    subscribe( 
      {
      next:(result)=>{
        this.stateData = result;
        
      },
      complete : ()=> {
        this.updateStats('California')

        this.loading = false
      } 
    }
      
      
    )
    
  }
  updateStats(state : string) {
    this.stateData.forEach(res=>{
      if(res.state == state) {
        this.totalConfirmed= res.cases
        this.totalActive= res.active
        this.totalRecovered= res.recovered
        this.totalDeaths= res.deaths

      }
    })
  }
  
}
