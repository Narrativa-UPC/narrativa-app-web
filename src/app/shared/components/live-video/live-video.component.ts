import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-video',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './live-video.component.html',
  styleUrl: './live-video.component.css'
})
export class LiveVideoComponent {
  liveVideos = [
    { title: 'C++ vs Python', thumbnail: 'assets/images/cpp-python.jpg', category: 'Lenguaje de Programación', viewers: '1.5K' },
    { title: 'R Studio Inicio', thumbnail: 'assets/images/rstudio.jpg', category: 'Base de Datos', viewers: '3K' },
    // Agrega más videos según sea necesario
  ];
}
