import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  //flightUrl = 'http://localhost:8080/flightservices/flights';
  //reservationUrl = 'http://localhost:8080/flightservices/reservations';
  flightUrl = 'http://ec2-35-183-131-244.ca-central-1.compute.amazonaws.com:3000/flightservices/flights';
  reservationUrl = 'http://ec2-35-183-131-244.ca-central-1.compute.amazonaws.com:3000/flightservices/reservations';
  
  public flightData: any;

  constructor(private http: Http) {}

  public getFlights(from: string, to: string, departureDate: string) {
      return this.http.get(this.flightUrl + `?from=${from}&to=${to}&departureDate=${departureDate}`).pipe(
        map(
          res => {
            this.flightData = res.json();
            // console.log('in reservation.service.ts');
            // console.log(this.flightData);
          },
          err => {
            console.error(err);
          }
        )
      );
  }

  public getFlight(id: number) {
    return this.http.get(this.flightUrl + `/${id}`).pipe(
      map(
        res => {
          return res.json();
        },
        err => {
          console.error(err);
        }
      )
    );
  }

  public saveReservation(reservation): any {
    console.log('The new reservation data is: ', reservation);
    return this.http.post(this.reservationUrl, reservation).pipe(
      map(
        res => {
          return res.json();
        },
        err => {
          console.error(err);
        }
      )
    );
  }
}
