import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the GOV.UK Design System notification banner component.
 * It provides users with important information relating to their task.
 *
 * @see https://design-system.service.gov.uk/components/notification-banner/
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
