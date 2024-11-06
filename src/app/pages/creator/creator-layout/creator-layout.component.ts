import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublicacionFormComponent } from '../publicacion-form/publicacion-form.component';

@Component({
  selector: 'app-creator-layout',
  standalone: true,
  imports: [RouterLink,PublicacionFormComponent],
  templateUrl: './creator-layout.component.html',
  styleUrl: './creator-layout.component.css'
})
export class CreatorLayoutComponent {

}
