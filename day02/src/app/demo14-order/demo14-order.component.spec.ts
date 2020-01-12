import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo14OrderComponent } from './demo14-order.component';

describe('Demo14OrderComponent', () => {
  let component: Demo14OrderComponent;
  let fixture: ComponentFixture<Demo14OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo14OrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo14OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
