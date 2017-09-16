import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import {Headers} from '@angular/http';



@Injectable()
export class AmbulanceRideNumberService {

    constructor(private http: Http) { }



    getRideNumberDetails(id): Observable<any> {

        const url = 'http://localhost:8000/ride_number/' + id;
        console.log("url "+url);

        return this.http.get(url).map(
            res => {
                const data = res.json();
                return data;
            }
        );
    }
}