import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17NotFoundComponent } from './demo17-not-found.component';

describe('Demo17NotFoundComponent', () => {
  let component: Demo17NotFoundComponent;
  let fixture: ComponentFixture<Demo17NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17NotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
