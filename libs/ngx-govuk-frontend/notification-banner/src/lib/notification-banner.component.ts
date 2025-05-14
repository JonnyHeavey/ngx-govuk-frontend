import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the GOV.UK Design System notification banner component.
 * It provides a way to display important information or updates that users need to know about.
 *
 * @example
 * ```html
 * <ngx-govuk-notification-banner title="Important">
 *   There is a planned outage on Sunday from 2am to 4am.
 * </ngx-govuk-notification-banner>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/notification-banner/ GOV.UK Notification banner}
 */
@Component({
  selector: 'ngx-govuk-notification-banner',
  templateUrl: './notification-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKNotificationBannerComponent {
  /** The title of the notification banner. This input is required. */
  readonly title = input.required<string>();
}
