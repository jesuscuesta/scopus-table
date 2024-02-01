import { Component, ViewChild } from '@angular/core';
import { Article } from '../../shared/model/article';
import { TableComponent } from '../../shared/components/table/table.component';
import { SelectFilesComponent } from '../../shared/components/select-files/select-files.component';
import { GetUniqueKeywordComponent } from '../../shared/components/get-unique-keyword/get-unique-keyword.component';
import { WordCloudComponent } from '../../shared/charts/word-cloud/word-cloud.component';
import { PieComponent } from '../../shared/charts/pie/pie.component';
import { FormsModule } from '@angular/forms';

import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-scopus',
  standalone: true,
  imports: [
    TableComponent,
    SelectFilesComponent,
    GetUniqueKeywordComponent,
    WordCloudComponent,
    PieComponent,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './scopus.component.html',
  styleUrl: './scopus.component.scss',
})
export class ScopusComponent {
  globalArticles: Article[] = [];
  listTotalIndex: { keyword: string; count: number }[] = [];
  minimumValue: number = 0;
  reloadChart: boolean = false;

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  newTable(newData: Article[]): void {
    this.globalArticles = newData;
  }

  saveListKeywords(newData: { keyword: string; count: number }[]): void {
    this.reloadChart = true;
    this.listTotalIndex = newData;
    setInterval(() => {
      this.reloadChart = false;
    }, 1000);
  }
}
