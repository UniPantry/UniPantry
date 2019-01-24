import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingNavComponent } from './onboarding-nav.component';

describe('OnboardingNavComponent', () => {
  let component: OnboardingNavComponent;
  let fixture: ComponentFixture<OnboardingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
