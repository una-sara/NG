import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo08PipesComponent } from './demo08-pipes.component';

describe('Demo08PipesComponent', () => {
  let component: Demo08PipesComponent;
  let fixture: ComponentFixture<Demo08PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo08PipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo08PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
