export interface FacebookAnalyticsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
