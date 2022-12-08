import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_SERVER = "http://localhost:8085/api/caesigie/personacoordinadora";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonInChargeService {

  constructor(private httpClient: HttpClient) { }

  public findPersonByEmail(email: string): Observable<any> {
    return this.httpClient.get(API_SERVER + "/{" + email + "}", httpOptions);
  }
}
