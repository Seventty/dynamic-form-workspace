/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UIDebugFormComponent } from './UIDebugForm.component';

describe('UIDebugFormComponent', () => {
  let component: UIDebugFormComponent;
  let fixture: ComponentFixture<UIDebugFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIDebugFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIDebugFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
