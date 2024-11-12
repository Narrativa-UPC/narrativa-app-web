import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PublicacionFormComponent } from './publicacion-form/publicacion-form.component';
import { CreatorLayoutComponent } from './creator-layout/creator-layout.component';

export const creatorRoutes: Routes = [
    {
        path: '',
        component: CreatorLayoutComponent,
        children: [
            {path: 'publicacion', component: PublicacionFormComponent}
        ]
    }
];