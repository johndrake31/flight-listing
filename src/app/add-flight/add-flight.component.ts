import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VolsHttpService } from '../vols-http.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  form!: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder,
    private addFlightHttp: VolsHttpService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      departureAirportCode: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      price: ['', Validators.required],
      volNumber: ['', Validators.required],
      arrivalAirportCode: ['', Validators.required],
      departureTime: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      late: [''],
    });
  }

  addMyFlight(): void {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.addFlightHttp.addFlight(this.form.value).subscribe();
      this.form.reset();
      this.formSubmitted = false;
    }
  }

}
