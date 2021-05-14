import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
 moreClicked = false;
  constructor() { }

  ngOnInit(): void {
  }



  sendTrue():void{
    this.moreClicked= !this.moreClicked;
  }



  @Input() volInfo = new Vol(
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

    @Output() sendId = new EventEmitter<number>();

    getId(){
      this.sendId.emit(this.volInfo.id);
    }

}
