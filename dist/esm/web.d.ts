import { WebPlugin } from '@capacitor/core';
import { FacebookAnalyticsPlugin } from './definitions';
export declare class FacebookAnalyticsWeb extends WebPlugin implements FacebookAnalyticsPlugin {
    constructor();
    initAppEvents(): Promise<string>;
    logEvent(_: {
        event: string;
        valueToSum?: number;
        params?: any;
    }): Promise<string>;
}
