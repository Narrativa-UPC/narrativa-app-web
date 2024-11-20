import { ArticleTemsComponent } from './../../shared/components/article-tems/article-tems.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarHomeComponent } from '../../shared/components/navbar-home/navbar-home.component';
import { NavbarUserComponent } from '../../shared/components/navbar-user/navbar-user.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RecomendBarComponent } from '../../shared/components/recomend-bar/recomend-bar.component';
import { CategoryBarComponent } from '../../shared/components/category-bar/category-bar.component';
import { CarrouselComponent } from '../../shared/components/carrousel/carrousel.component';
import { LiveVideoComponent } from '../../shared/components/live-video/live-video.component';
import { AutheService } from './../../core/services/authe.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarHomeComponent,
    NavbarUserComponent, 
    FooterComponent, 
    RecomendBarComponent,
    CategoryBarComponent,
    CarrouselComponent,
    ArticleTemsComponent,
    LiveVideoComponent,
    RouterOutlet, 
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'narrativa-web';
  isLoggedIn: boolean = false;  // Variable para controlar si el usuario está logueado

  constructor(public autheService: AutheService) {}

  ngOnInit(): void {
    // Nos suscribimos al observable de currentUser$ para obtener el estado de autenticación
    this.autheService.currentUser$.subscribe(user => {
      this.isLoggedIn = !!user;  // Si hay un usuario, el valor será true, sino false
    });
  }
}