import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import {Headers} from '@angular/http';



@Injectable()
export class AmbulanceRouteService {

    constructor(private http: Http) { }



    getAmbulanceRouteDetails(id,type): Observable<any> {
        var url = null;
         if(type){
             url = 'http://localhost:8000/routesTaken/' + id + '/' + type;
         }
         else{
             url = 'http://localhost:8000/routesTaken/' + id;
         }
         console.log("url "+url);

        return this.http.get(url).map(
            res => {
                const data = res.json();
                return data;
            }
        );
    }
}