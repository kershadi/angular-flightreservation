import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ReservationService } from './services/reservation.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FindFlightsComponent,
    DisplayFlightsComponent,
    PassengerDetailsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    FormsModule
  ],
  providers: [ReservationService],
  bootstrap: [FindFlightsComponent]
})
export class AppModule { }
