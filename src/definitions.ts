export interface FacebookAnalyticsPlugin {
  initAppEvents(): Promise<string>;
  logEvent(options: { event: string, valueToSum?: number, params?: any }): Promise<string>;
  enableAdvertiserTracking(): Promise<any>;
  disableAdvertiserTracking(): Promise<any>;
  getAdvertiserTrackingStatus(): Promise<any>;
}
