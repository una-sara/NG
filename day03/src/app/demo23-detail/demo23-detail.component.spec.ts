import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo23DetailComponent } from './demo23-detail.component';

describe('Demo23DetailComponent', () => {
  let component: Demo23DetailComponent;
  let fixture: ComponentFixture<Demo23DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo23DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo23DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
