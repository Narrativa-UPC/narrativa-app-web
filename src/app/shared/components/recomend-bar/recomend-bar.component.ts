import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-recomend-bar',
  standalone: true,
  imports: [CommonModule,MatListModule],
  templateUrl: './recomend-bar.component.html',
  styleUrl: './recomend-bar.component.css'
})
export class RecomendBarComponent {
  recommendedChannels = [
    { name: 'Rubius', category: 'Física', viewers: '35.4K', online: true },
    { name: 'Asmongold', category: 'Matemáticas', viewers: '32.7K', online: false },
    // Agrega más canales según sea necesario
  ];
}