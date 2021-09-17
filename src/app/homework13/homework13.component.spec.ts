import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework13Component } from './homework13.component';

describe('Homework13Component', () => {
  let component: Homework13Component;
  let fixture: ComponentFixture<Homework13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
