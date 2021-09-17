import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework12Component } from './homework12.component';

describe('Homework12Component', () => {
  let component: Homework12Component;
  let fixture: ComponentFixture<Homework12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
