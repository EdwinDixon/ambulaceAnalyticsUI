import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import {Headers} from '@angular/http';



@Injectable()
export class AccidentProneAreasService {

    constructor(private http: Http) { }



    getAccidentProneAreasService(type): Observable<any> {


        const url = 'http://localhost:8000/accidentProneAreas/' + type;

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