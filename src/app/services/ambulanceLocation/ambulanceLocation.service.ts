import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Rx';



@Injectable()
export class AmbulanceLocationService {

  constructor(private http:Http) { }

  getAmbulancelocations(){

  }

  getAmbulanceDetails(): Observable<any> {
    const url = 'http://localhost:8000/ambulanceDetails';
      return this.http.get(url).map(
      res => {
        const data = res.json();
        return data;
      }
  );
  }
}
