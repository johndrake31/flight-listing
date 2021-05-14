import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightPlanningComponent } from './flight-planning/flight-planning.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

{ path: 'home', component: FlightPlanningComponent },
{ path: 'addflight', component: AddFlightComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
