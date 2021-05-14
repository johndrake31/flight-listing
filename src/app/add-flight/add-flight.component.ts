import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  form!: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      deptairportcode: ['', Validators.required],
      departdate: ['', Validators.required],
      arrival: ['', Validators.required],
      price: ['', Validators.required],
      flightnumber: ['', Validators.required],
      arrvairportcode: ['', Validators.required],
      departtime: ['', Validators.required],
      arrivaltime: ['', Validators.required],
      flightlate: ['', Validators.required],
    });
  }

}
