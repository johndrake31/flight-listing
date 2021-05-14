import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullFlightDetialsComponent } from './full-flight-detials.component';

describe('FullFlightDetialsComponent', () => {
  let component: FullFlightDetialsComponent;
  let fixture: ComponentFixture<FullFlightDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullFlightDetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullFlightDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
