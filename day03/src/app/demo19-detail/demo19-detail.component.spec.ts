import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo19DetailComponent } from './demo19-detail.component';

describe('Demo19DetailComponent', () => {
  let component: Demo19DetailComponent;
  let fixture: ComponentFixture<Demo19DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo19DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo19DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
