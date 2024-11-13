import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-tems',
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: './article-tems.component.html',
  styleUrl: './article-tems.component.css'
})
export class ArticleTemsComponent {
  articles = [
    { title: 'ChatGPT', thumbnail: 'assets/images/chatgpt.jpg' },
    { title: 'Cálculo', thumbnail: 'assets/images/calculo.jpg' },
    // Agrega más artículos según sea necesario
  ];
}
