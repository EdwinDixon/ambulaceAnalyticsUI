import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import {Headers} from '@angular/http';



@Injectable()
export class AmbulanceCurrentRouteService {

    constructor(private http: Http) { }



    getAmbulanceCurrentRoute(id): Observable<any> {


        const url = 'http://localhost:8000/currentRoute/' + id;

        console.log("url "+url);

        return this.http.get(url).map(
            res => {
                if (res['_body']) {
                    const data = res.json();
                    return data;
                }
                else{
                    return null;
                }
            }
        );
    }
}