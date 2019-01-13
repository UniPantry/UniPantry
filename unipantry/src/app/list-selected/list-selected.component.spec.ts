import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectedComponent } from './list-selected.component';

describe('ListSelectedComponent', () => {
  let component: ListSelectedComponent;
  let fixture: ComponentFixture<ListSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
