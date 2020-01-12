import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo21OutboxComponent } from './demo21-outbox.component';

describe('Demo21OutboxComponent', () => {
  let component: Demo21OutboxComponent;
  let fixture: ComponentFixture<Demo21OutboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo21OutboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo21OutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
