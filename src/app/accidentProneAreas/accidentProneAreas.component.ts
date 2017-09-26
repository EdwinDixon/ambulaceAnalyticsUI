import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {HeatmapLayer} from '@ngui/map';
import { Injectable} from '@angular/core';
import {} from '@types/googlemaps';
import {NgZone } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {FormControl} from '@angular/forms';
import {SourceCodeService} from '../services/source-code.service';
import {ActivatedRoute, Params} from '@angular/router';
import {AccidentProneAreasService} from '../services/ambulanceLocation/accidentProneAreas.services';
import * as _ from "lodash";

@Component({
    selector: 'app-heatmap',
    templateUrl: './accidentProneAreas.component.html',
    styleUrls: ['./accidentProneAreas.component.css'] ,
    providers: [AccidentProneAreasService]
})
@Injectable()
export class AccidentProneAreasComponent implements OnInit, OnDestroy  {
    center: any;
    public type: string;
    public lat;
    public long;
    public searchControl: FormControl;
    public zoom: number;


    @ViewChild(HeatmapLayer) heatmapLayer: HeatmapLayer;
    heatmap: google.maps.visualization.HeatmapLayer;
    map: google.maps.Map;
    points = [];
    code: string;
    constructor(private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone, private route: ActivatedRoute,
    private accidentProneAreas: AccidentProneAreasService) {


    }
    setCurrentUserPosition(coordinates){
        console.log(coordinates);
        this.lat=coordinates.coords.latitude;
        this.long=coordinates.coords.longitude;
        this.zoom = 13;
        console.log(this.lat);
        console.log(this.long);
    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.long = position.coords.longitude;
                this.zoom = 13;
            });
        }
    }



    ngOnInit(): void {

        console.log("hello bose");
        console.log("heat map layer ",this.heatmapLayer);
        this.heatmapLayer['initialized$'].subscribe(heatmap => {
            console.log(heatmap);
            /*        this.points = [
             new google.maps.LatLng(37.782551, -122.445368),
             new google.maps.LatLng(37.782745, -122.444586),
             new google.maps.LatLng(37.782842, -122.443688),
             new google.maps.LatLng(9.986791, 76.301101),
             new google.maps.LatLng(9.986792, 76.301103),
             new google.maps.LatLng(9.986763, 76.301108),
             new google.maps.LatLng(9.986756, 76.301108),
             new google.maps.LatLng(9.986786, 76.301198),
             new google.maps.LatLng(9.986786, 76.301128),
             new google.maps.LatLng(9.986706, 76.301188),
             new google.maps.LatLng(9.986716, 76.301178),
             new google.maps.LatLng(9.986786, 76.301198)
             ];*/
            this.heatmap = heatmap;
            this.map = this.heatmap.getMap();
            this.daily();


        });

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setCurrentUserPosition.bind(this));
            this.searchControl = new FormControl();
        }

        this.setCurrentPosition();

    }
    toggleHeatmap() {
        this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
    }
    changeGradient() {
        let gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
        ];
        this.heatmap.set('gradient', this.heatmap.get('gradient') ? null : gradient);
    }

    changeRadius() {
        this.heatmap.set('radius', this.heatmap.get('radius') ? null : 20);
    }
    daily() {
        console.log("clicked");
        this.type = 'daily';
            this.accidentProneAreas.getAccidentProneAreasService(this.type).subscribe(res => {
            this.points = [];
            _.forEach(res, data => {
                this.points.push(new google.maps.LatLng(data.incidentLatLng[0],
                    data.incidentLatLng[1]));
                this.heatmap.setData(this.points);
            });
        });


    }
    monthly() {
        this.type = 'monthly';
        this.accidentProneAreas.getAccidentProneAreasService(this.type).subscribe(res => {
            this.points = [];
            _.forEach(res, data => {
                this.points.push(new google.maps.LatLng(data.incidentLatLng[0],
                    data.incidentLatLng[1]));
                this.heatmap.setData(this.points);
            });
        });
    }
    weekly() {
        this.type = 'weekly';
        this.accidentProneAreas.getAccidentProneAreasService(this.type).subscribe(res => {
            this.points = [];
            _.forEach(res, data => {
                this.points.push(new google.maps.LatLng(data.incidentLatLng[0],
                    data.incidentLatLng[1]));
                this.heatmap.setData(this.points);
            });
        });
    }
    ngOnDestroy() { }
}
