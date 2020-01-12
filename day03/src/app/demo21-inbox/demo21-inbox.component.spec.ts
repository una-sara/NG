import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo21InboxComponent } from './demo21-inbox.component';

describe('Demo21InboxComponent', () => {
  let component: Demo21InboxComponent;
  let fixture: ComponentFixture<Demo21InboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo21InboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo21InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
