import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AmbulanceLocationService } from '../services/ambulanceLocation/ambulanceLocation.service';
import {forEach} from "@angular/router/src/utils/collection";
@Component({
  selector: 'app-ambulancelist',
  templateUrl: './ambulancelist.component.html',
  styleUrls: ['./ambulancelist.component.css'],
  providers: [ AmbulanceLocationService]
})
export class AmbulancelistComponent implements OnInit {

  // Details= [];

  constructor(private ambulancedetails: AmbulanceLocationService) { }

  ngOnInit() {
    this.ambulancedetails.getAmbulanceDetails().subscribe(
        res => {
          _.forEach(res, data => {
            console.log(data);
          });
        });


}
