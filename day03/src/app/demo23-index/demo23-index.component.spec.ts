import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo23IndexComponent } from './demo23-index.component';

describe('Demo23IndexComponent', () => {
  let component: Demo23IndexComponent;
  let fixture: ComponentFixture<Demo23IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo23IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo23IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
