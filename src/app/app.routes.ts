import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/home/landing/landing.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'creator',
        loadChildren: () => import('./pages/creator/creator.routes').then(m=>m.creatorRoutes),
    },
    {
        path:'user',
        loadChildren: () => import('./pages/user/user.routes').then(m=>m.userRoutes),
    },
    {
        path:'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(m=>m.authRoutes),
    },
    {path: 'landing', component: LandingComponent},
    {
        path:'**',
        redirectTo:'',
    },

];
