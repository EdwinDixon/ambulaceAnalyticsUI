import { Component, OnInit } from '@angular/core';
import { AmbulanceLocationService } from '../services/ambulanceLocation/ambulanceLocation.service';
import * as _ from "lodash";
@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls:['./map.component.css'],
  providers:[AmbulanceLocationService]
})

export class MapComponent implements OnInit{

  public lat;
  public long;
  public markerPositions=[];

  constructor(private ambulanceLocationService:AmbulanceLocationService){}

  setCurrentUserPosition(coordinates){
    console.log(coordinates);
    this.lat=coordinates.coords.latitude;
    this.long=coordinates.coords.longitude;
    console.log(this.lat);
    console.log(this.long);
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
    };

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
   this.ambulanceLocationService.getAmbulanceDetails().subscribe(
     res => {
       _.forEach(res,ambulance => {
         console.log(ambulance.ambulanceId);
         this.addMarkerPositions(ambulance.location[0],ambulance.location[1]);
       })

     }
   );
  }


}
