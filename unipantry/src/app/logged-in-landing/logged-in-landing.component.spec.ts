import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInLandingComponent } from './logged-in-landing.component';

describe('LoggedInLandingComponent', () => {
  let component: LoggedInLandingComponent;
  let fixture: ComponentFixture<LoggedInLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
