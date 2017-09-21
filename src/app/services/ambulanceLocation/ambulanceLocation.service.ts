import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import {Headers} from '@angular/http';



@Injectable()
export class AmbulanceLocationService {

  constructor(private http: Http) { }



  getAmbulanceDetails(): Observable<any> {

    const url = 'http://localhost:8000/ambulanceDetails';
      return this.http.get(url).map(
      res => {
        const data = res.json();
      }
  );
  }
}
