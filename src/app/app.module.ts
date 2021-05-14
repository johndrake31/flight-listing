import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlightPlanningComponent } from './flight-planning/flight-planning.component';
import { FlightComponent } from './flight/flight.component';
import { FullFlightDetialsComponent } from './full-flight-detials/full-flight-detials.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    FlightPlanningComponent,
    FlightComponent,
    FullFlightDetialsComponent,
    AddFlightComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
