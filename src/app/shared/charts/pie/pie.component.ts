import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-pie',
  standalone: true,
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss',
})
export class PieComponent {
  public chart: any;
  listLabels: string[] = [];
  listCount: number[] = [];
  listColours: string[] = [];
  @Input() childTotalIndex: any[] = [];

  ngOnInit() {
    this.setValueChart();
    this.createChart();
  }

  setValueChart() {
    for (let field of this.childTotalIndex) {
      this.listLabels.push(field.keyword);
      this.listCount.push(field.count);
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

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        labels: this.listLabels,
        datasets: [
          {
            label: 'Datos de Scopus',
            data: this.listCount,
            backgroundColor: this.listColours,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
