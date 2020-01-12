import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo20MainComponent } from './demo20-main.component';

describe('Demo20MainComponent', () => {
  let component: Demo20MainComponent;
  let fixture: ComponentFixture<Demo20MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo20MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo20MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
