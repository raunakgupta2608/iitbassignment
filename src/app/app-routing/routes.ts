import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { IntroComponent } from '../intro/intro.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    { path: 'intro', component: IntroComponent,},
    { path: '' , redirectTo: '/intro', pathMatch: 'full' }
];