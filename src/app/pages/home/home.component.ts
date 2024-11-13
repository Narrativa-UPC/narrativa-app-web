import { ArticleTemsComponent } from './../../shared/components/article-tems/article-tems.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarHomeComponent } from '../../shared/components/navbar-home/navbar-home.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RecomendBarComponent } from '../../shared/components/recomend-bar/recomend-bar.component';
import { CategoryBarComponent } from '../../shared/components/category-bar/category-bar.component';
import { CarrouselComponent } from '../../shared/components/carrousel/carrousel.component';
import { LiveVideoComponent } from '../../shared/components/live-video/live-video.component';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarHomeComponent, 
    FooterComponent, 
    RecomendBarComponent,
    CategoryBarComponent,
    CarrouselComponent,
    ArticleTemsComponent,
    LiveVideoComponent,
    RouterOutlet, 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'narrativa-web';
  constructor(public authService: AuthService) {}
}