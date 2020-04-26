import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flightReservation';

  constructor(private router: Router) {
 }


  public goToFindFlights() {
    console.log('in app.component.ts');
    this.router.navigate(['/findFlights']/*, { replaceUrl: true }*/);
  }
}
