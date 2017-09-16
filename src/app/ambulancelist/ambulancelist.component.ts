import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AmbulanceLocationService } from '../services/ambulanceLocation/ambulanceLocation.service';
import {forEach} from "@angular/router/src/utils/collection";
import * as _ from "lodash";
@Component({
  selector: 'app-ambulancelist',
  templateUrl: './ambulancelist.component.html',
  styleUrls: ['./ambulancelist.component.css'],
  providers: [ AmbulanceLocationService]
})


export class AmbulancelistComponent implements OnInit {
    public ambulanceData = [];
    public pageSize;

    // Details= [];

    constructor(private ambulancedetails: AmbulanceLocationService, private router: Router) {

    }

    ngOnInit() {
        this.ambulancedetails.getAmbulanceDetails().subscribe(
            res => {
                this.pageSize = 10;
                this.ambulanceData = [];
                _.forEach(res, data => {
                    this.ambulanceData.push(data);
                });
            });


    }
    ambulanceDetailClicked(id){
         this.router.navigate(['/AmbulanceRoute', id]);
    }
    ngDoCheck() {
         this.pageSize=10;
    }
    ngAfterContentInit() {
         this.pageSize=10;
    }
    ngAfterContentChecked() {
         this.pageSize=10;
    }
    ngAfterViewChecked() {
         this.pageSize=10;
    }

    getAmbulanceData() {
        return this.ambulanceData;
    }
}
