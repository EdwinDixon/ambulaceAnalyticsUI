import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AccidentProneAreasComponent} from './accidentProneAreas/accidentProneAreas.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { MapComponent } from './map/map.component';
import {AmbulancelistComponent} from './ambulancelist/ambulancelist.component';
import {AmbulanceRouteComponent} from './ambulanceRoute/ambulanceRoute.component';
import {AmbulanceHighProximityAreasComponent} from './ambulanceHighProximityAreas/ambulanceHighProximityAreas.component';
import {UsualAmbulanceRoutesComponent} from './usualAmbulanceRoutes/usualAmbulanceRoutes.component';

export const router: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full' },
    {path : 'Home' , component: MapComponent },
    {path : 'Heatmap' , component: HeatmapComponent},
    {path : 'Ambulancelist', component: AmbulancelistComponent},
    {path : 'AccidentProneAreas', component: AccidentProneAreasComponent},
    {path : 'AmbulanceRoute/:id',component: AmbulanceRouteComponent},
    {path : 'AmbulanceHighProximityAreas',component: AmbulanceHighProximityAreasComponent},
    {path : 'UsualAmbulanceRoutes',component: UsualAmbulanceRoutesComponent}

]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
