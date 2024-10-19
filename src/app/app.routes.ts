import { Routes } from '@angular/router';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { ChampionListComponent } from './champion-list/champion-list.component';

export const routes: Routes = [
    { path: '', component: ChampionListComponent },
    { path: 'details/:season', component: ChampionDetailsComponent },
];
