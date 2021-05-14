import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vol } from '../model/vol.model';

@Component({
  selector: 'app-full-flight-detials',
  templateUrl: './full-flight-detials.component.html',
  styleUrls: ['./full-flight-detials.component.scss']
})
export class FullFlightDetialsComponent implements OnInit {
  @Output() sendTruthy = new EventEmitter<boolean>();

  changeBool():void{
      this.sendTruthy.emit(false);
  }

  @Input() flightInfo = new Vol(
    9,
    "EFDAF",
    "CDG",
    "BDX",
    "2022-12-02",
    "2022-12-03",
    "12:39:00",
    "16:40:00",
    false,
    234.0);

  constructor() { }

  ngOnInit(): void {
  }

}
