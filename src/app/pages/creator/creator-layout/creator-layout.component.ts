import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarCreatorComponent } from "../../../shared/components/navbar-creator/navbar-creator.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarHomeComponent } from '../../../shared/components/navbar-home/navbar-home.component';


@Component({
  selector: 'app-creator-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarCreatorComponent, FooterComponent, NavbarHomeComponent],
  templateUrl: './creator-layout.component.html',
  styleUrl: './creator-layout.component.css'
})
export class CreatorLayoutComponent {

}
