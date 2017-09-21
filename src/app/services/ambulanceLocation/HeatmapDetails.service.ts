/**
 * Created by aneesh on 19/9/17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import {Headers} from '@angular/http';
@Injectable()
export class HeatmapDetailsService {
    private type: string;
    constructor(private http: Http) {
    }

    getHeatMapDetails(type): Observable<any> {
        this.type = type;
        const url = 'http://localhost:8000/heatMap' + '/' + this.type;
        return this.http.get(url).map(
            res => {
                const data = res.json();
            }
        );
    }
}
