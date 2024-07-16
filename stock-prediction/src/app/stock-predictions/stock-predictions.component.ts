import { Component, OnInit } from '@angular/core';
import { StockPredictionService } from '../stock-prediction.service';

@Component({
  selector: 'app-stock-predictions',
  templateUrl: './stock-predictions.component.html',
  styleUrls: ['./stock-predictions.component.css']
})
export class StockPredictionsComponent implements OnInit {
  predictions: number[] = [];
  ticker: string = 'AAPL';
  period: string = '1y';

  constructor(private stockPredictionService: StockPredictionService) {}

  ngOnInit(): void {
    this.getPredictions();
  }

  getPredictions(): void {
    this.stockPredictionService.getPredictions(this.ticker, this.period).subscribe(data => {
      this.predictions = data.predictions;
    });
  }
}
