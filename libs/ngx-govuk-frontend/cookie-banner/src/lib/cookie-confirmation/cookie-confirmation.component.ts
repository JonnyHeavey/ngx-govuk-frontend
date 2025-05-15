import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import {
  GovUKButtonComponent,
  GovUKButtonGroupComponent,
} from 'ngx-govuk-frontend/button';

/**
 * This component implements the confirmation message within the GOV.UK Design System cookie banner.
 * It displays after the user accepts or rejects cookies.
 *
 * @see {@link https://design-system.service.gov.uk/components/cookie-banner/ GOV.UK Cookie Banner}
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
