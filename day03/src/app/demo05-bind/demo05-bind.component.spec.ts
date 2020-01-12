import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05BindComponent } from './demo05-bind.component';

describe('Demo05BindComponent', () => {
  let component: Demo05BindComponent;
  let fixture: ComponentFixture<Demo05BindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo05BindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo05BindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
