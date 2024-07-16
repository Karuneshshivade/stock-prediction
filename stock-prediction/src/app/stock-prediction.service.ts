import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockPredictionService {
  private apiUrl = 'http://127.0.0.1:5000/predict';

  constructor(private http: HttpClient) {}

  getPredictions(ticker: string, period: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { ticker, period });
  }
}
