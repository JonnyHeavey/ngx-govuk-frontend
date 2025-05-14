import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import {
  GovUKButtonComponent,
  GovUKButtonGroupComponent,
} from 'ngx-govuk-frontend/button';

/**
 * This component implements the GOV.UK Design System cookie banner component.
 * It helps users understand how their data is being used and gives them the option to accept or reject cookies.
 *
 * @example
 * ```html
 * <ngx-govuk-cookie-banner
 *   appName="My Service"
 *   (accept)="onAcceptCookies()"
 *   (reject)="onRejectCookies()"
 *   (view)="onViewCookieSettings()">
 * </ngx-govuk-cookie-banner>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/cookie-banner/ GOV.UK Cookie banner}
 */
@Component({
  selector: 'ngx-govuk-cookie-banner',
  imports: [GovUKButtonComponent, GovUKButtonGroupComponent],
  templateUrl: './cookie-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKCookieBannerComponent {
  /** The name of the application or service using the cookie banner. This input is required. */
  readonly appName = input.required<string>();

  /** Event emitted when the user accepts cookies. */
  readonly accept = output<void>();

  /** Event emitted when the user rejects cookies. */
  readonly reject = output<void>();

  /** Event emitted when the user chooses to view cookie settings. */
  readonly view = output<void>();
}
