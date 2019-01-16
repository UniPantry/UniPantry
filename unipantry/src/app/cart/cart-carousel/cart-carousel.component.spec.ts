import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCarouselComponent } from './cart-carousel.component';

describe('CartCarouselComponent', () => {
  let component: CartCarouselComponent;
  let fixture: ComponentFixture<CartCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
