import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-article-tems',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatCardModule],
  templateUrl: './article-tems.component.html',
  styleUrl: './article-tems.component.css'
})
export class ArticleTemsComponent {
  articles = [
    { title: 'ChatGPT', thumbnail: './assets/Images/chatGPT.jpg', description: 'Un modelo de lenguaje desarrollado por OpenAI.' },
    { title: 'Cálculo', thumbnail: './assets/Images/fisica.jpg', description: 'Una rama de las matemáticas que estudia el cambio.' },
    { title: 'ChatGPT', thumbnail: './assets/Images/chatGPT.jpg', description: 'Un modelo de lenguaje desarrollado por OpenAI.' },
    { title: 'Cálculo', thumbnail: './assets/Images/fisica.jpg', description: 'Una rama de las matemáticas que estudia el cambio.' },
    { title: 'ChatGPT', thumbnail: './assets/Images/chatGPT.jpg', description: 'Un modelo de lenguaje desarrollado por OpenAI.' },
    { title: 'Cálculo', thumbnail: './assets/Images/fisica.jpg', description: 'Una rama de las matemáticas que estudia el cambio.' },
    // Agrega más artículos según sea necesario
  ];
}
