import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vol } from './model/vol.model';


@Injectable({
  providedIn: 'root'
})
export class VolsHttpService {
  urlVols = "http://localhost:8080/learn/api/vols";
  constructor(private http: HttpClient) {}

  getFlights(): Observable<Vol[]>{
      return this.http.get<[]>(this.urlVols)
    }
  findFlight(id: number): Observable<Vol> {
    return this.http.get<Vol>(this.urlVols + '/' + id);
  }
  addFlight(flight: Vol): Observable<Vol>{
    return this.http.post<Vol>(this.urlVols, flight);
  }

}
