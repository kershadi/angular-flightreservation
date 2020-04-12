import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {
  flights: any;

  constructor(private service: ReservationService, private router: Router) {
      console.log('in constructor: display-flights.components.ts');
      // this.flights = this.service.flightData;
     // console.log('flightData: ', this.service.flightData);
   }

  ngOnInit() {
    this.flights = this.service.flightData;
    console.log('in display-flights.components.ts');
    console.log('this.service.flightData: ', this.service.flightData);
    console.log('this.flights: ', this.flights);
  }

  public onSelectFlight(id: number): any {
     this.router.navigate(['/passengerDetails/' + id]);
  }

}
