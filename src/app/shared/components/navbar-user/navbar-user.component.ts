import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [RouterLink, CarouselModule],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
  
})
export class NavbarUserComponent {

}
