import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import {
  GovUKButtonComponent,
  GovUKButtonGroupComponent,
} from 'ngx-govuk-frontend/button';

/**
 * This component implements the confirmation banner for the GOV.UK Design System cookie banner component.
 * It provides confirmation to users after they've accepted or rejected cookies, with options to change
 * their preferences or hide the banner.
 *
 * @example
 * ```html
 * <ngx-govuk-cookie-confirmation
 *   (changeSettings)="onChangeCookieSettings()"
 *   (hide)="onHideBanner()">
 * </ngx-govuk-cookie-confirmation>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/cookie-banner/ GOV.UK Cookie banner}
 */
@Component({
  selector: 'ngx-govuk-cookie-confirmation',
  imports: [GovUKButtonComponent, GovUKButtonGroupComponent],
  templateUrl: './cookie-confirmation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKCookieConfirmationComponent {
  /** Event emitted when the user wants to change their cookie settings. */
  readonly changeSettings = output<void>();

  /** Event emitted when the user wants to hide the confirmation banner. */
  readonly hide = output<void>();
}
