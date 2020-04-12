import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {

  constructor(private service: ReservationService, private router: Router) { }

  ngOnInit() {
  }

  public onSubmit(data) {
    console.log('in onSubmit() find-flights.component.ts');
    this.service.getFlights(data.from, data.to, data.departureDate).subscribe(
      res => {
        console.log('in find-flights.component.ts');
        console.log(this.service.flightData);
        this.router.navigate(['/displayFlights']);
      }
    );
  }

}
