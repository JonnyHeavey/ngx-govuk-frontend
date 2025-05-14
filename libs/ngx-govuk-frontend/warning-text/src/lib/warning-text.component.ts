import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the GOV.UK Design System warning text component.
 * It helps make users aware of important information that could affect their application or journey.
 *
 * @example
 * ```html
 * <ngx-govuk-warning-text>
 *   You can be fined up to £5,000 if you don't register.
 * </ngx-govuk-warning-text>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/warning-text/ GOV.UK Warning text}
 */
@Component({
  selector: 'ngx-govuk-warning-text',
  templateUrl: './warning-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKWarningTextComponent {}
