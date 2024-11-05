import { Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { VideoCatalogComponent } from './video-catalog/video-catalog.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

export const userRoutes: Routes = [
    {
        path: '',
        component: UserLayoutComponent,
        children: [
            {
                path: 'catalog',
                component: VideoCatalogComponent,
            },
            {
                path: 'catalog/:id',
                component: VideoDetailComponent,
            }
        ]
    }
];