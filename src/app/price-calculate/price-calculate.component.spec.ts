import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCalculateComponent } from './price-calculate.component';

describe('PriceCalculateComponent', () => {
  let component: PriceCalculateComponent;
  let fixture: ComponentFixture<PriceCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
