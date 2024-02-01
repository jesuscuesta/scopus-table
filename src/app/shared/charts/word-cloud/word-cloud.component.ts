import { Component, Input } from '@angular/core';
import WordCloud from 'wordcloud';

@Component({
  selector: 'app-word-cloud',
  standalone: true,
  imports: [],
  templateUrl: './word-cloud.component.html',
  styleUrl: './word-cloud.component.scss',
})
export class WordCloudComponent {
  @Input() childTotalIndex: any[] = [];
  listLabels: [string, number][] = [];
  listColours: string[] = [];

  ngOnInit() {
    this.setValueChart();

    const canvas: HTMLElement|null  = document.querySelector('#wordcloud');
    if (canvas) {
      WordCloud(canvas, {
        list:
          this.listLabels
        ,
        gridSize: 20,
        weightFactor: 2,
        fontFamily: 'Noto Sans KR',
        rotateRatio: 0,
        shape: 'square',
        color: (word, weight) => this.getRandomColour(),
      });
    }
  }

  setValueChart() {
    for (let field of this.childTotalIndex) {
      this.listLabels.push([field.keyword, field.count]);
      this.listColours.push(
        'rgb(' +
          Math.floor(Math.random() * 255) +
          ', ' +
          Math.floor(Math.random() * 255) +
          ', ' +
          Math.floor(Math.random() * 255) +
          ')'
      );
    }
  }

  getRandomColour():string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
