import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { AgmCoreModule} from '@agm/core';
import { HttpModule } from '@angular/http';
import {Observable} from "rxjs/Rx";
import { NguiUtilsModule } from '@ngui/utils';
import { NguiMapModule } from '@ngui/map';
import {routes} from './app.router';

import { AppComponent } from './app.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { MdSidenavModule } from '@angular/material';
import { MapComponent } from "./map/map.component";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { AmbulancelistComponent } from './ambulancelist/ambulancelist.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MapComponent,
    HeatmapComponent,
    AmbulancelistComponent,
  ],
  imports: [
      routes,
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
      '&libraries=visualization,places,drawing,geometry'
    }),
    HttpModule,
    BrowserModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    MdSidenavModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuLjb-tYWSU0ce1ffg_Wv42yQ4oz4cZ_s',
      libraries: ['places', 'visualization']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
