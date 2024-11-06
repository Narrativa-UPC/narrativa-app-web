import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublicacionFormComponent } from '../publicacion-form/publicacion-form.component';
import { NavbarCreatorComponent } from "../../../shared/components/navbar-creator/navbar-creator.component";

@Component({
  selector: 'app-creator-layout',
  standalone: true,
  imports: [RouterLink, PublicacionFormComponent, NavbarCreatorComponent],
  templateUrl: './creator-layout.component.html',
  styleUrl: './creator-layout.component.css'
})
export class CreatorLayoutComponent {

}
