import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-get-unique-keyword',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './get-unique-keyword.component.html',
  styleUrl: './get-unique-keyword.component.scss',
})
export class GetUniqueKeywordComponent {
  @Input() childGlobalArticles: any[] = [];
  @Input() childTotalChart: number = 1;
  @Input() childTypeKeyword: string = 'indexKeyword';
  @Output() allCountValue = new EventEmitter<
    { keyword: string; count: number }[]
  >();

  getUniqueKeyword(): void {
    const keywordMap = this.childGlobalArticles.reduce((acc, article) => {
      const keywords = this.extractKeywords(article[this.childTypeKeyword]);
      keywords.forEach((keyword) =>
        acc.set(keyword, (acc.get(keyword) || 0) + 1)
      );
      return acc;
    }, new Map<string, number>());

    const filteredKeywords = this.getMinimumValue(keywordMap);
    const uniqueKeywordsArray = filteredKeywords.map(([keyword, count]) => ({
      keyword,
      count,
    }));
    this.allCountValue.emit(uniqueKeywordsArray);
  }

  extractKeywords(text: string | undefined): string[] {
    if (!text) return [];
    return text.split(';').map((keyword) => keyword.trim().toLowerCase());
  }

  getMinimumValue(valueChart: Map<string, number>): [string, number][] {
    return Array.from(valueChart).filter(
      ([keyword, count]) => count > this.childTotalChart
    );
  }
}
