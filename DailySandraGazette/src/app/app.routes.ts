import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { Error404Component } from './components/error404/error404.component';
import { LogInComponent } from './components/log-in/log-in.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'section/:section', component: SectionComponent },
    { path: 'login', component: LogInComponent},
    { path: '**', component: Error404Component }
];
