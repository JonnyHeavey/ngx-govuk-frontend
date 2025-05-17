import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the GOV.UK Design System details component.
 * It makes a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * @see https://design-system.service.gov.uk/components/details/
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
