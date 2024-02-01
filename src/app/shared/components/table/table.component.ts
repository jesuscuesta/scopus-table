import { Component, Input } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() globalArticles: Article[] = [];
}
