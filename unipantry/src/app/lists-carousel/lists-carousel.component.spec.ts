import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsCarouselComponent } from './lists-carousel.component';

describe('ListsCarouselComponent', () => {
  let component: ListsCarouselComponent;
  let fixture: ComponentFixture<ListsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
