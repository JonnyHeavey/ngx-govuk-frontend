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
 * It informs users that your service uses cookies and allows them to accept or reject cookies.
 *
 * @see {@link https://design-system.service.gov.uk/components/cookie-banner/ GOV.UK Cookie Banner}
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
