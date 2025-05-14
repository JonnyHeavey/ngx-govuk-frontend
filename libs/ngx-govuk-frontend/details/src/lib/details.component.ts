import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the GOV.UK Design System details component.
 * It makes a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * @example
 * ```html
 * <ngx-govuk-details summary="Help with nationality">
 *   <p>If you're not sure about your nationality, try to find out from an official document like a passport or national ID card.</p>
 * </ngx-govuk-details>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/details/ GOV.UK Details}
 */
@Component({
  selector: 'ngx-govuk-details',
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKDetailsComponent {
  /** The text shown in the details summary element. This input is required. */
  readonly summary = input.required<string>();
}
