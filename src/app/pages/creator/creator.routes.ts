import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PublicacionFormComponent } from './publicacion-form/publicacion-form.component';
import { CreatorLayoutComponent } from './creator-layout/creator-layout.component';
import { PublicacionListComponent } from './publicacion-list/publicacion-list.component';
import { PublicacionViewComponent } from './publicacion-view/publicacion-view.component';

export const creatorRoutes: Routes = [
    {
        path: '',
        component: CreatorLayoutComponent,
        children: [
            {path: 'publicacion', component: PublicacionFormComponent},
            {path: 'list-publicaciones', component: PublicacionListComponent},     
            {path: 'publicacion-view/:id', component: PublicacionViewComponent}, 
        ]
    }
];