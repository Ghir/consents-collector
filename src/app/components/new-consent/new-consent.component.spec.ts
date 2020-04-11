
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/services/api.service';
import { ConsentTypes } from 'src/app/types/types';
import { ApiServiceMock } from 'src/mocks/apiMock.service';
import { NewConsentComponent } from './new-consent.component';

describe('NewConsentComponent', () => {
  let component: NewConsentComponent;
  let fixture: ComponentFixture<NewConsentComponent>;
  let apiService: ApiService;
  let apiSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewConsentComponent
      ],
      providers: [
        FormBuilder,
        {
          provide: ApiService,
          useClass: ApiServiceMock
        }
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsentComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    apiSpy = spyOn(apiService, 'postConsent').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should post data', () => {
    component.consentForm.get('name').setValue('testName');
    component.consentForm.get('email').setValue('testEmail@gmail.com');
    component.consentForm.get('consents').get(ConsentTypes.ADS).setValue(true);

    fixture.detectChanges();
    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(apiSpy).toHaveBeenCalled();
  });
});
