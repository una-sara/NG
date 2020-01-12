import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo03LianxiComponent } from './demo03-lianxi.component';

describe('Demo03LianxiComponent', () => {
  let component: Demo03LianxiComponent;
  let fixture: ComponentFixture<Demo03LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo03LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo03LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
