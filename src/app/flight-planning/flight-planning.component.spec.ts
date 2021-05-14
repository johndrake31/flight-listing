import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPlanningComponent } from './flight-planning.component';

describe('FlightPlanningComponent', () => {
  let component: FlightPlanningComponent;
  let fixture: ComponentFixture<FlightPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
