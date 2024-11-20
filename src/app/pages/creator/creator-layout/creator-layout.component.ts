import { AutheService } from './../../../core/services/authe.service';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarCreatorComponent } from "../../../shared/components/navbar-creator/navbar-creator.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarHomeComponent } from '../../../shared/components/navbar-home/navbar-home.component';
import { RecomendBarComponent } from '../../../shared/components/recomend-bar/recomend-bar.component';
import { NavbarUserComponent } from '../../../shared/components/navbar-user/navbar-user.component';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-creator-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarCreatorComponent, FooterComponent, NavbarHomeComponent, RecomendBarComponent, NavbarUserComponent, CommonModule, NgIf] ,
  templateUrl: './creator-layout.component.html',
  styleUrl: './creator-layout.component.css'
})
export class CreatorLayoutComponent {
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
