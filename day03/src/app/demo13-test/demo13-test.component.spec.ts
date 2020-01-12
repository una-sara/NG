import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13TestComponent } from './demo13-test.component';

describe('Demo13TestComponent', () => {
  let component: Demo13TestComponent;
  let fixture: ComponentFixture<Demo13TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
