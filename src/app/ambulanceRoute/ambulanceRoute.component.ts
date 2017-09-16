import {Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {NgZone } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {ActivatedRoute} from '@angular/router';
import {AmbulanceCurrentRouteService} from '../services/ambulanceLocation/ambulanceCurrentRoute.service'
import {AmbulanceRouteService} from '../services/ambulanceLocation/ambulanceRoute.service';
import * as _ from "lodash";
import {FormControl} from "@angular/forms";
@Component({
    selector: 'ambulanceRoute',
    templateUrl: './ambulanceRoute.component.html',
    styleUrls: [ './ambulanceRoute.component.css'],
    providers: [ AmbulanceRouteService, AmbulanceCurrentRouteService ]
})

export class AmbulanceRouteComponent implements OnInit, OnDestroy{

    public lat;
    public long;
    public ambulanceRoutes;
    public incidentLocation;
    public markerPositions=[];
    public searchControl: FormControl;
    public zoom: number;
    private _lastOpenIndex: number = -1;
    @ViewChild("search")
    public searchElementRef: ElementRef;



    constructor( private mapsAPILoader: MapsAPILoader,private ambulanceRouteService:AmbulanceRouteService,
                private ngZone: NgZone, private route: ActivatedRoute,
    private ambulanceCurrentRouteService:AmbulanceCurrentRouteService){
        this.ambulanceRoutes=[];
    }




    ngOnInit(){




        this.ambulanceCurrentRouteService.getAmbulanceCurrentRoute(this.route.snapshot.params['id']).subscribe(
            res => {
                this.ambulanceRoutes = [];
                console.log("response "+res);
                    if(res) {
                        this.incidentLocation = res.incidentLatLng;
                        this.ambulanceRoutes.push(res);
                        console.log("incident location ", this.incidentLocation);
                    }
                console.log("ambulanceRoutes ",this.ambulanceRoutes);
                if(this.ambulanceRoutes.length>0) {
                    console.log(this.ambulanceRoutes);
                    this.setCurrentRouteDestination(this.incidentLocation[0],this.incidentLocation[1]);
                    this.searchControl = new FormControl();
                }
                else{
                    if(navigator.geolocation){
                        navigator.geolocation.getCurrentPosition(this.setCurrentUserPosition.bind(this));
                        this.searchControl = new FormControl();


                    }
                }
            }


        );





    }
    daily(id){
        this.ambulanceRouteService.getAmbulanceRouteDetails(this.route.snapshot.params['id'],'daily').subscribe(
            res => {
                this.incidentLocation = null;
                this.ambulanceRoutes = [];
                _.forEach(res, ambulance => {
                    this.ambulanceRoutes.push(ambulance);
                });


            }
        );
    }

    weekly(id){
        this.ambulanceRouteService.getAmbulanceRouteDetails(this.route.snapshot.params['id'],'weekly').subscribe(
            res => {
                this.incidentLocation = null;
                this.ambulanceRoutes = [];
                _.forEach(res, ambulance => {
                    this.ambulanceRoutes.push(ambulance);
                });


            }
        );
    }

    monthly(id){
        this.ambulanceRouteService.getAmbulanceRouteDetails(this.route.snapshot.params['id'],'monthly').subscribe(
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
