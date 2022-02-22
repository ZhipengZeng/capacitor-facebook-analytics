import { WebPlugin } from '@capacitor/core';

import type { FacebookAnalyticsPlugin } from './definitions';

export class FacebookAnalyticsWeb
  extends WebPlugin
  implements FacebookAnalyticsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
