import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {
  categories = ['IA', 'Matemáticas', 'Física', 'Estadística', 'Base de Datos', 'Lenguajes de Programación'];
  
}
