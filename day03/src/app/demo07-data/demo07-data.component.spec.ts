import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo07DataComponent } from './demo07-data.component';

describe('Demo07DataComponent', () => {
  let component: Demo07DataComponent;
  let fixture: ComponentFixture<Demo07DataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo07DataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo07DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
