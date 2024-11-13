import { Component } from '@angular/core';
import { NavbarHomeComponent } from '../../shared/components/navbar-home/navbar-home.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarHomeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}