import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { MapComponent } from './map/map.component';
import {AmbulancelistComponent} from './ambulancelist/ambulancelist.component';
import {AmbulanceRouteComponent} from './ambulanceRoute/ambulanceRoute.component';
export const router: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full' },
    {path : 'Home' , component: MapComponent },
    {path : 'Heatmap' , component: HeatmapComponent},
    {path : 'Ambulancelist', component: AmbulancelistComponent},
    {path : 'AmbulanceRoute/:id', component: AmbulanceRouteComponent}
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
