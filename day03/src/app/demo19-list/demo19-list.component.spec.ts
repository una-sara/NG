import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo19ListComponent } from './demo19-list.component';

describe('Demo19ListComponent', () => {
  let component: Demo19ListComponent;
  let fixture: ComponentFixture<Demo19ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo19ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo19ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
