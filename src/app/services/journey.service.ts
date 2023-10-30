import { Injectable } from '@angular/core';
import { RequestJourney } from 'src/app/models/JourneyRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  group(arg0: {}): import("@angular/forms").FormGroup<any> {
    throw new Error('Method not implemented.');
  }

  urlBase = 'http://localhost:8080/trips';
  constructor(private http: HttpClient) { }

  obtenerJourney(request: RequestJourney): Observable<any>{
    return this.http.post<any>(this.urlBase, request);
  }

}
