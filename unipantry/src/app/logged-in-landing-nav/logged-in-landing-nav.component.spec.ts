import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInLandingNavComponent } from './logged-in-landing-nav.component';

describe('LoggedInLandingNavComponent', () => {
  let component: LoggedInLandingNavComponent;
  let fixture: ComponentFixture<LoggedInLandingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInLandingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInLandingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
