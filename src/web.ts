import { WebPlugin } from '@capacitor/core';

import { FacebookAnalyticsPlugin } from './definitions';

export class FacebookAnalyticsWeb
  extends WebPlugin
  implements FacebookAnalyticsPlugin {

  constructor() {
    super({
      name: 'FacebookAnalytics',
      platforms: ['web'],
    });
  }

  initAppEvents(): Promise<string> {
    throw super.unimplemented();
  }

  logEvent(_: { event: string, valueToSum?: number, params?: any }): Promise<string> {
    throw super.unimplemented();
  }

  enableAdvertiserTracking(): Promise<any> {
    throw super.unimplemented();
  }
  
  disableAdvertiserTracking(): Promise<any> {
    throw super.unimplemented();
  }

  getAdvertiserTrackingStatus(): Promise<any> {
    throw super.unimplemented();
  }
}
