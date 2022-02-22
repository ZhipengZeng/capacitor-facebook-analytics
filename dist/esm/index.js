import { registerPlugin } from '@capacitor/core';
const FacebookAnalytics = registerPlugin('FacebookAnalytics', {
    web: () => import('./web').then(m => new m.FacebookAnalyticsWeb()),
});
export * from './definitions';
export { FacebookAnalytics };
//# sourceMappingURL=index.js.map