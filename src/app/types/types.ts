export interface ConsentItem {
  name: string;
  email: string;
  consents: string[];
}

export enum consentTypes {
  ADS = 'Be shown targeted ads',
  NEWSLETTER = 'Receive newsletter',
  STATISTICS = 'Contribute to anonymous visit statistics'
}