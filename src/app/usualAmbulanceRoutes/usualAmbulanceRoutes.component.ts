import {Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {NgZone } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {ActivatedRoute} from '@angular/router';
import {AmbulanceCurrentRouteService} from '../services/ambulanceLocation/ambulanceCurrentRoute.service'
import {AmbulanceRouteService} from '../services/ambulanceLocation/ambulanceRoute.service';
import {UsualAmbulanceRoutesService} from '../services/ambulanceLocation/usualAmbulanceRoutes.service'
import * as _ from "lodash";
import {FormControl} from "@angular/forms";
@Component({
    selector: 'ambulanceRoute',
    templateUrl: './usualAmbulanceRoutes.component.html',
    styleUrls: [ './usualAmbulanceRoutes.component.css'],
    providers: [ UsualAmbulanceRoutesService ]
})

export class UsualAmbulanceRoutesComponent implements OnInit, OnDestroy{

    public lat;
    public long;
    public ambulanceRoutes;
    public incidentLocation;
    public markerPositions=[];
    public searchControl: FormControl;
    public zoom: number;
    private _lastOpenIndex: number = -1;



    constructor( private mapsAPILoader: MapsAPILoader,
                 private ngZone: NgZone, private route: ActivatedRoute,
                 private usualAmbulanceRouteService:UsualAmbulanceRoutesService){
        this.ambulanceRoutes=[];
    }




    ngOnInit() {


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setCurrentUserPosition.bind(this));
            this.searchControl = new FormControl();


        }


    }






    daily(){
        this.usualAmbulanceRouteService.getUsualAmbulanceRoutes('daily').subscribe(
            res => {
                this.incidentLocation = null;
                this.ambulanceRoutes = [];
                _.forEach(res, ambulance => {
                    this.ambulanceRoutes.push(ambulance);
                });


            }
        );
    }

    weekly(){
        this.usualAmbulanceRouteService.getUsualAmbulanceRoutes('weekly').subscribe(
            res => {
                this.incidentLocation = null;
                this.ambulanceRoutes = [];
                _.forEach(res, ambulance => {
                    this.ambulanceRoutes.push(ambulance);
                });


            }
        );
    }

    monthly(){
        this.usualAmbulanceRouteService.getUsualAmbulanceRoutes('monthly').subscribe(
            res => {
                this.incidentLocation = null;
                this.ambulanceRoutes = [];
                _.forEach(res, ambulance => {
                    this.ambulanceRoutes.push(ambulance);
                });

            }
        );
    }

    setCurrentRouteDestination(lat,long){
        console.log(lat +" "+long);
        this.lat = lat;
        this.long = long;
        this.zoom = 9;

    }

    setCurrentUserPosition(coordinates){
        console.log(coordinates);
        this.lat=coordinates.coords.latitude;
        this.long=coordinates.coords.longitude;
        this.zoom = 9;
        console.log(this.lat);
        console.log(this.long);
    }

    ngOnDestroy(){ }

}
