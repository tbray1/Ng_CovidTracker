import { Component, OnInit } from '@angular/core';
import { CovidStatsService } from '../data-service';
import { filter, map } from 'rxjs/operators';
import { ICountry } from '../states/country.interface';
import { StateData } from '../states/state-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countryData: any;
 stateData: StateData[];
  totalConfirmed = 0;
  totalActive = 0;
  totalRecovered = 0;
  totalDeaths = 0;
  datatable = []
  loading = true;

  chart = {
    PieChart : "PieChart" ,
    ColumnChart : 'ColumnChart' ,
    LineChart : "LineChart", 
    height: 500, 
    options: {
      animation:{
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }  
  }
  constructor(private statsService: CovidStatsService) { }

  
    ngOnInit(): void {

      this.statsService.getCountryData()
        .subscribe(
          {
            next: (result) => {
              this.countryData = result;
              result.forEach(cs => {
                if (!Number.isNaN(cs.cases)) {
                  this.totalActive += cs.active
                  this.totalConfirmed += cs.cases
                  this.totalDeaths += cs.deaths
                  this.totalRecovered += cs.recovered
                }
  
              })
  
              this.initChart('c');
            }, 
            complete : ()=>{
              this.loading = false;
            }
          }
        )
    }
    updateChart(input: HTMLInputElement) {
      this.initChart(input.value)
    }
    initChart(caseType:string) {
      this.datatable=[]
      this.countryData.forEach(cs=>{
      let value:number;
      if (caseType == 'c')
      if (cs.cases > 2000)
        value = cs.cases
        
    if (caseType == 'a')
      if (cs.active > 2000)
        value = cs.active
    if (caseType == 'd')
      if (cs.deaths > 1000)
        value = cs.deaths
        
    if (caseType == 'r')
      if (cs.recovered > 2000)
          value = cs.recovered
      

      this.datatable.push([
          cs.country, value
        ])
      })
    }
  

    }
  

