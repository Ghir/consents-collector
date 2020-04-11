import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsentTypes } from 'src/app/types/types';
import { getConsentsArray, minSelectedValidator } from '../../helpers/utils';
import { ApiService } from '../../services/api.service';

const MIN_CONSENTS = 1;

@Component({
  selector: 'app-new-consent',
  templateUrl: './new-consent.component.html',
  styleUrls: ['./new-consent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewConsentComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  consentForm: FormGroup;
  consentTypes = ConsentTypes;

  ngOnInit(): void {
    this.consentForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      consents: this.fb.group({
        [ConsentTypes.NEWSLETTER]: this.fb.control(false),
        [ConsentTypes.ADS]: this.fb.control(false),
        [ConsentTypes.STATISTICS]: this.fb.control(false)
      })
    }, { validators: minSelectedValidator(MIN_CONSENTS) });
  }

  submit(): void {
    if (this.consentForm.valid) {
      const consentsGroup = this.consentForm.get('consents') as FormGroup;
      const consents = getConsentsArray(consentsGroup);
      const formValue = {
        ...this.consentForm.value,
        consents
      };

      this.apiService.postConsent(formValue).subscribe();
      this.router.navigate(['collected']);
    }
  }
}
