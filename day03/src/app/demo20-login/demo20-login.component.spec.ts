import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo20LoginComponent } from './demo20-login.component';

describe('Demo20LoginComponent', () => {
  let component: Demo20LoginComponent;
  let fixture: ComponentFixture<Demo20LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo20LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo20LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
