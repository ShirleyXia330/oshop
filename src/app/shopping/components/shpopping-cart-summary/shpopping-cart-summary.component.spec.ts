import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpoppingCartSummaryComponent } from './shpopping-cart-summary.component';

describe('ShpoppingCartSummaryComponent', () => {
  let component: ShpoppingCartSummaryComponent;
  let fixture: ComponentFixture<ShpoppingCartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShpoppingCartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShpoppingCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
