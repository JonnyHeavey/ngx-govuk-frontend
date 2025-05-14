import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the GOV.UK Design System inset text component.
 * It provides a way to visually distinguish certain text from the content that surrounds it.
 * It's typically used for quotes, examples, or additional information that supplement the main content.
 *
 * @example
 * ```html
 * <ngx-govuk-inset-text>
 *   You may be eligible for additional benefits if you have children.
 * </ngx-govuk-inset-text>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/inset-text/ GOV.UK Inset text}
 */
@Component({
  selector: 'ngx-govuk-inset-text',
  templateUrl: './inset-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKInsetTextComponent {}
