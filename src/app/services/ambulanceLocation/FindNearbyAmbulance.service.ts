import { Injectable } from '@angular/core';
import {Http, RequestMethod, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Rx';
import {Headers} from '@angular/http';



@Injectable()
export class FindNearbyAmbulanceService {
  private lat;
  private long;
  constructor(private http:Http) { }

  getNearbyAmbulances(lat,long):Observable<any> {
    this.lat=lat;
    this.long=long;
    var headers = new Headers();
    headers.append("Content-Type", 'application/json');
    var body=JSON.stringify({"lat":this.lat,"long":this.long,"d":"15"});
    console.log("body",body);
    var options = new RequestOptions({headers:headers});
    const url = 'http://localhost:8000/nearbyAmbulance';
    return this.http.post(url,body,options).map(
      res => {
        const data = res.json();
        return data;
      }
    );
  }

/*  getAmbulanceDetails(): Observable<any> {
    const url = 'http://localhost:8000/nearbyAmbulance';
    return this.http.post(url).map(
      res => {
        const data = res.json();
        return data;
      }
    );
  }*/
}
