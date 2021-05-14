import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolsHttpService } from '../vols-http.service';

@Component({
  selector: 'app-flight-planning',
  templateUrl: './flight-planning.component.html',
  styleUrls: ['./flight-planning.component.scss']
})
export class FlightPlanningComponent implements OnInit {
  displayAllFlights = true;
  volsTbl: Vol[] = [];
  flightDetials!: Vol;

  constructor( private volInfo: VolsHttpService) { }

  ngOnInit(): void {
    this.volInfo.getFlights().subscribe(data => {
      this.volsTbl = data;
    })
  }
  closeFlightWindow($event: boolean){
    this.displayAllFlights=!this.displayAllFlights;
  }

  getFlightId($event:number){
    this.displayAllFlights = !this.displayAllFlights;
    this.volInfo.findFlight($event).subscribe( data=>this.flightDetials=data )
  }
}
