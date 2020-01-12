import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo21MailComponent } from './demo21-mail.component';

describe('Demo21MailComponent', () => {
  let component: Demo21MailComponent;
  let fixture: ComponentFixture<Demo21MailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo21MailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo21MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
