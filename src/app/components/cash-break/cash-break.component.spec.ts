import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBreakComponent } from './cash-break.component';

describe('CashBreakComponent', () => {
  let component: CashBreakComponent;
  let fixture: ComponentFixture<CashBreakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashBreakComponent]
    });
    fixture = TestBed.createComponent(CashBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
