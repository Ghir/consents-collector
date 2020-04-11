import { of } from 'rxjs';
import { consentsMock } from './consentsMock';

export class ApiServiceMock {
  getConsentsList() { return of(consentsMock); }
  postConsent() { return of(null); }
}