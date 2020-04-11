import { ConsentItem, ConsentTypes } from '../app/types/types';

export const consentsMock: ConsentItem[] = [
  {
    name: 'Joe Smith',
    email: 'josmith@gmail.com',
    consents: [ConsentTypes.ADS, ConsentTypes.STATISTICS, ConsentTypes.NEWSLETTER]
  },
  {
    name: 'David Miller',
    email: 'davidmiller@gmail.com',
    consents: [ConsentTypes.NEWSLETTER]
  },
  {
    name: 'Mary Wilson',
    email: 'marywilson@gmail.com',
    consents: [ConsentTypes.STATISTICS, ConsentTypes.NEWSLETTER]
  },
  {
    name: 'Patricia Williams',
    email: 'patriciawilliams@gmail.com',
    consents: [ConsentTypes.ADS]
  }
]