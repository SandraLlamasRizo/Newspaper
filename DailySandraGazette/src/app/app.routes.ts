import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { Error404Component } from './components/error404/error404.component';
import { LogInComponent } from './auth/log-in/log-in.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    {
        path: 'admin', loadChildren: () => import('./admin/routes/admin.routes').then(m => m.ADMIN_routes)
    },
    { path: 'section/:section', component: SectionComponent },
    { path: 'login', component: LogInComponent},
    { path: '**', component: Error404Component }
];
