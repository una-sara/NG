import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17RegisterComponent } from './demo17-register.component';

describe('Demo17RegisterComponent', () => {
  let component: Demo17RegisterComponent;
  let fixture: ComponentFixture<Demo17RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
