import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_SERVER = "http://localhost:8085/api/caesigie/actividadacademica";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AcademicActivityServiceService {

  constructor(private httpClient: HttpClient) { }

  public getAllQueries(): Observable<any> {
    return this.httpClient.get(API_SERVER, httpOptions);
  }

  public saveAcademicActivity(academicActivity: any): Observable<any> {
    return this.httpClient.post(API_SERVER, httpOptions);
  }
}
