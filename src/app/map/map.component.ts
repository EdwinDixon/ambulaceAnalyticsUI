import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgZone } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {Headers} from '@angular/http';
import { AmbulanceLocationService } from '../services/ambulanceLocation/ambulanceLocation.service';
import { FindNearbyAmbulanceService } from '../services/ambulanceLocation/FindNearbyAmbulance.service'
import * as _ from "lodash";
import {FormControl} from "@angular/forms";
@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls:['./map.component.css'],
  providers:[FindNearbyAmbulanceService]
})

export class MapComponent implements OnInit{

  public lat;
  public long;
  public markerPositions=[];
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;



  constructor(private FindNearbyAmbulanceService:FindNearbyAmbulanceService, private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone){}

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

  addMarkerPositions(latitude,longitude){
   this.markerPositions.push({
     latitude:latitude,
     longitude:longitude
   })
  }

  ngOnInit(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setCurrentUserPosition.bind(this));
      this.searchControl = new FormControl();


    };

    this.setCurrentPosition();

/*    this.map
      .getMap()
      .then(map=>{
        let markers = [this.lat, this.long];
        this.mapsManager
          .calculateMapBounds(markers)
          .then((bounds) => {
            bounds && this.map.fitBounds(bounds);
          });
      });*/


    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.long = place.geometry.location.lng();
          this.zoom = 15;
          this.markerPositions=[];
          clearInterval(timeoutId);
          console.log("time out id cleared");
          this.FindNearbyAmbulanceService.getNearbyAmbulances(this.lat,this.long).subscribe(
            res => {
              _.forEach(res,ambulance => {
                console.log(ambulance);

                this.addMarkerPositions(ambulance.location.y,ambulance.location.x);
              })

            }
          );
          var timeoutId = setInterval(() => {
            this.markerPositions=[];
            this.FindNearbyAmbulanceService.getNearbyAmbulances(this.lat,this.long).subscribe(
              res => {
                _.forEach(res,ambulance => {
                  console.log(ambulance);

                  this.addMarkerPositions(ambulance.location.y,ambulance.location.x);
                })

              }
            );
          }, 2000);

        });
      });
    });
  }



}
