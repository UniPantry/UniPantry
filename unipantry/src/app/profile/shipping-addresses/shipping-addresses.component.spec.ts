import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAddressesComponent } from './shipping-addresses.component';

describe('ShippingAddressesComponent', () => {
  let component: ShippingAddressesComponent;
  let fixture: ComponentFixture<ShippingAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
