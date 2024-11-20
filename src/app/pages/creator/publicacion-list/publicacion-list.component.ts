import { CommonModule } from '@angular/common';
import { CreacionPublicacionService } from '../../../core/services/creacion-publicacion.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Publicacion } from '../../../shared/models/publicacion.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-publicacion-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink,RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './publicacion-list.component.html',
  styleUrl: './publicacion-list.component.css'
})
export class PublicacionListComponent {
  publicaciones: Publicacion[] = [];

  private publicacionService = inject(CreacionPublicacionService);
  private router = inject(Router);

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void{
    this.loadPublicaciones();
  }

  loadPublicaciones(): void {
    this.publicaciones = this.publicacionService.getPublicaciones();
  }

  getSanitizedContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
