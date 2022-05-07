import { Component, Input, OnInit } from '@angular/core';
import { IStatistics } from 'src/app/modules/players/models/players.model';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'players-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {

  @Input() statistics: IStatistics;

  constructor() { }

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };
  public pieChartData: ChartData<'pie', number[], string | string[]>;
  public pieChartType: ChartType = 'pie';

  ngOnInit(): void {
    const data = [];
    const labels = [];
    for (const item of this.statistics.paysRatioSorted) {
      labels.push(item.name);
      data.push(item.ratio);
    }

    this.pieChartData = {
      labels,
      datasets: [{
        data
      }]
    };
  }
}