import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCreditComponent } from './gift-credit.component';

describe('GiftCreditComponent', () => {
  let component: GiftCreditComponent;
  let fixture: ComponentFixture<GiftCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
