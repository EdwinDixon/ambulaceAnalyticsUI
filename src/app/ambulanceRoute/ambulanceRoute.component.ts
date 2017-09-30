import {Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {NgZone } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {ActivatedRoute} from '@angular/router';
import * as _ from "lodash";
import {FormControl} from "@angular/forms";
@Component({
    selector: 'ambulanceRoute',
    templateUrl: './ambulanceRoute.component.html',
    styleUrls: [ './ambulanceRoute.component.css'],
    // providers: [ FindNearbyAmbulanceService ]
})

export class AmbulanceRouteComponent implements OnInit, OnDestroy{

    public lat;
    public long;
    public markerPositions=[];
    public searchControl: FormControl;
    public zoom: number;
    private _lastOpenIndex: number = -1;
    @ViewChild("search")
    public searchElementRef: ElementRef;



    constructor( private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone, private route: ActivatedRoute){}




    ngOnInit(){

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.setCurrentUserPosition.bind(this));
            this.searchControl = new FormControl();


        }




    }
    setCurrentUserPosition(coordinates){
        console.log(coordinates);
        this.lat=coordinates.coords.latitude;
        this.long=coordinates.coords.longitude;
        this.zoom = 13;
        console.log(this.lat);
        console.log(this.long);
    }
    ngOnDestroy(){ }

}
