import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-select-files',
  standalone: true,
  imports: [],
  templateUrl: './select-files.component.html',
  styleUrl: './select-files.component.scss',
})
export class SelectFilesComponent {
  // Para devolver el resultado al componente padre
  @Output() valueTableJson = new EventEmitter<Article[]>();

  globalArticles: Article[] = [];

  processFiles(event: any): void {
    const files = event.target.files;
    if (files.length) {
      this.clearResults();
      this.globalArticles = []; // Reinicia la lista de artículos

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const contents = e.target.result;
          this.processFile(contents);
        };
        reader.readAsText(file as File); // Hacemos un cast explícito aquí
      });
    }
  }

  private processFile(contents: string): void {
    const lines = contents.split('\n');
    let articles: Article[] = [];
    let currentArticle: Article = {};

    for (let line of lines) {
      if (line.startsWith('ABSTRACT:')) {
        if (currentArticle.abstract) {
          articles.push(currentArticle);
          currentArticle = {};
        }
        currentArticle.abstract = line.substring(9).trim();
      } else if (line.startsWith('AUTHOR KEYWORDS:')) {
        currentArticle.authorKeyword = line.substring(16).trim();
      } else if (line.startsWith('INDEX KEYWORDS:')) {
        currentArticle.indexKeyword = line.substring(15).trim();
      }
    }

    if (currentArticle.abstract) {
      articles.push(currentArticle);
    }

    this.globalArticles = [...this.globalArticles, ...articles];
    this.valueTableJson.emit(this.globalArticles);
  }

  clearResults(): void {
    this.globalArticles = [];
  }
}
