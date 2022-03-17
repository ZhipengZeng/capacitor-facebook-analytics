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
    enableAdvertiserTracking() {
        throw super.unimplemented();
    }
    disableAdvertiserTracking() {
        throw super.unimplemented();
    }
    getAdvertiserTrackingStatus() {
        throw super.unimplemented();
    }
}
//# sourceMappingURL=web.js.map