import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StateData } from './states/state-data.interface'
import {map } from 'rxjs/operators'
import { ICountry } from './states/country.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidStatsService {
private url = "https://corona.lmao.ninja/v3/covid-19";


  constructor(private http: HttpClient) { }

  getStateData() {
    return this.http.get(this.url+'/states').pipe(
      map(result=>{
        return <StateData[]>Object.values(result)
      })
    )
  }
  getCountryData(){
    return this.http.get(this.url+'/countries').pipe(
      map(result=>{
        return <ICountry[]>Object.values(result)
      })
    )
  }
}
