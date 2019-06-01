import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCompComponent } from './date-comp.component';

describe('DateCompComponent', () => {
  let component: DateCompComponent;
  let fixture: ComponentFixture<DateCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
