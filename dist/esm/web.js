import { WebPlugin } from '@capacitor/core';
export class FacebookAnalyticsWeb extends WebPlugin {
    constructor() {
        super({
            name: 'FacebookAnalytics',
            platforms: ['web'],
        });
    }
    initAppEvents() {
        throw super.unimplemented();
    }
    logEvent(_) {
        throw super.unimplemented();
    }
}
//# sourceMappingURL=web.js.map