import { ConsentItem, consentTypes } from '../app/types/types';

export const consentsMock: ConsentItem[] = [
  {
    name: 'Joe Smith',
    email: 'josmith@gmail.com',
    consents: [consentTypes.ADS, consentTypes.STATISTICS, consentTypes.NEWSLETTER]
  },
  {
    name: 'David Miller',
    email: 'davidmiller@gmail.com',
    consents: [consentTypes.NEWSLETTER]
  },
  {
    name: 'Mary Wilson',
    email: 'marywilson@gmail.com',
    consents: [consentTypes.STATISTICS, consentTypes.NEWSLETTER]
  },
  {
    name: 'Patricia Williams',
    email: 'patriciawilliams@gmail.com',
    consents: [consentTypes.ADS]
  },
  {
    name: 'Joe Smith',
    email: 'josmith@gmail.com',
    consents: [consentTypes.ADS, consentTypes.STATISTICS]
  }
]