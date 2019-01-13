import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaywallModalComponent } from './paywall-modal.component';

describe('PaywallModalComponent', () => {
  let component: PaywallModalComponent;
  let fixture: ComponentFixture<PaywallModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaywallModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaywallModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
