import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CovidStatsService } from './components/data-service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StatesComponent } from './components/states/states.component';
import { CardComponent } from './components/card/card.component';
import { GoogleChartsModule } from 'angular-google-charts';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StatesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [CovidStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
