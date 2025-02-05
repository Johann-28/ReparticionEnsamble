import { Routes } from '@angular/router';
import { CancionesComponent } from './canciones/canciones.component';
import { SetlistsComponent } from './setlists/setlists.component';

export const routes: Routes = [
    {
        path: '', component : CancionesComponent,
    },
    {
        path : 'setlists', component : SetlistsComponent
    }
];
