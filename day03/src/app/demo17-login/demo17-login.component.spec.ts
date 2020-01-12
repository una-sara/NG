import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17LoginComponent } from './demo17-login.component';

describe('Demo17LoginComponent', () => {
  let component: Demo17LoginComponent;
  let fixture: ComponentFixture<Demo17LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
