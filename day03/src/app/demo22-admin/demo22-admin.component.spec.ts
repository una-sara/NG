import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo22AdminComponent } from './demo22-admin.component';

describe('Demo22AdminComponent', () => {
  let component: Demo22AdminComponent;
  let fixture: ComponentFixture<Demo22AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo22AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo22AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
