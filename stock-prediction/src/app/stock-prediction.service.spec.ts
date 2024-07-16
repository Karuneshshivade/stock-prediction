import { TestBed } from '@angular/core/testing';

import { StockPredictionService } from './stock-prediction.service';

describe('StockPredictionService', () => {
  let service: StockPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
