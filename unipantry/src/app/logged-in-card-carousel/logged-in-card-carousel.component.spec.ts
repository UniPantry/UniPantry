import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInCardCarousel1Component } from './logged-in-card-carousel-1.component';
import { LoggedInCardCarousel2Component } from './logged-in-card-carousel-2.component';
import { LoggedInCardCarousel3Component } from './logged-in-card-carousel-3.component';


describe('LoggedInCardCarousel1Component', () => {
  let component: LoggedInCardCarousel1Component;
  let fixture: ComponentFixture<LoggedInCardCarousel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInCardCarousel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInCardCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('LoggedInCardCarousel2Component', () => {
  let component: LoggedInCardCarousel2Component;
  let fixture: ComponentFixture<LoggedInCardCarousel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInCardCarousel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInCardCarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('LoggedInCardCarousel3Component', () => {
  let component: LoggedInCardCarousel3Component;
  let fixture: ComponentFixture<LoggedInCardCarousel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInCardCarousel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInCardCarousel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
