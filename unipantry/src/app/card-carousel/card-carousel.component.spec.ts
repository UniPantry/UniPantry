import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarousel1Component } from './card-carousel-1.component';
import { CardCarousel2Component } from './card-carousel-2.component';
import { CardCarousel3Component } from './card-carousel-3.component';


describe('CardCarousel1Component', () => {
  let component: CardCarousel1Component;
  let fixture: ComponentFixture<CardCarousel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarousel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CardCarousel2Component', () => {
  let component: CardCarousel2Component;
  let fixture: ComponentFixture<CardCarousel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarousel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CardCarousel3Component', () => {
  let component: CardCarousel3Component;
  let fixture: ComponentFixture<CardCarousel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarousel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarousel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

