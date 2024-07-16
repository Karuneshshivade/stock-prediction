import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPredictionsComponent } from './stock-predictions.component';

describe('StockPredictionsComponent', () => {
  let component: StockPredictionsComponent;
  let fixture: ComponentFixture<StockPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockPredictionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
