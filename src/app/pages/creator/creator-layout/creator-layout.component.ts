import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarCreatorComponent } from "../../../shared/components/navbar-creator/navbar-creator.component";

@Component({
  selector: 'app-creator-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarCreatorComponent],
  templateUrl: './creator-layout.component.html',
  styleUrl: './creator-layout.component.css'
})
export class CreatorLayoutComponent {

}
