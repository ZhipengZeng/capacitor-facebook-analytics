import { registerPlugin } from '@capacitor/core';

import { FacebookAnalyticsPlugin } from './definitions';

const FacebookAnalytics = registerPlugin<FacebookAnalyticsPlugin>(
  'FacebookAnalytics',
  {
    web: () => import('./web').then(m => new m.FacebookAnalyticsWeb()),
  },
);

export * from './definitions';
export { FacebookAnalytics };
