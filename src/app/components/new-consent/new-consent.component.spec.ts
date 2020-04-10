import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsentComponent } from './new-consent.component';

describe('NewConsentComponent', () => {
  let component: NewConsentComponent;
  let fixture: ComponentFixture<NewConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
