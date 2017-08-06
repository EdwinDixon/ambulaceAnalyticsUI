import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { AgmCoreModule} from '@agm/core';
import { HttpModule } from '@angular/http';
import {Observable} from "rxjs/Rx";



import { AppComponent } from './app.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { MdSidenavModule } from '@angular/material';
import { MapComponent } from "./map/map.component";
import {FormControl,FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MapComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    MdSidenavModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuLjb-tYWSU0ce1ffg_Wv42yQ4oz4cZ_s',
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
