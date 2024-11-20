import { Component, inject } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { CreacionPublicacionService } from '../../../core/services/creacion-publicacion.service';
import { CommonModule } from '@angular/common';
import { Publicacion } from '../../../shared/models/publicacion.model';
import { ActivatedRoute } from '@angular/router'; // Corrected import
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-publicacion-view',
  standalone: true,
  imports: [RouterLink, CommonModule, MatCard],
  templateUrl: './publicacion-view.component.html',
  styleUrls: ['./publicacion-view.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class PublicacionViewComponent {
  publicacion: Publicacion | null = null; // Assuming Publicacion is an object, not an array
  publicacionId: string | null = null; // Allowing null for uninitialized

  private publicacionService = inject(CreacionPublicacionService);
  private router = inject(Router);
  private route = inject(ActivatedRoute); // Inject ActivatedRoute to use it

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Initialize the route parameter when the component loads
    this.publicacionId = this.route.snapshot.paramMap.get('id');
    if (this.publicacionId) {
      this.loadPublicacion();
    }
  }

  loadPublicacion(): void {
    // Make sure that publicacionService is correctly fetching by the id
    if (this.publicacionId) {
      this.publicacion = this.publicacionService.getPublicacionById(Number(this.publicacionId)); // Convert id to number
    }
  }

  getSanitizedContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
