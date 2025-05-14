import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the GOV.UK Design System panel component.
 * It provides a visually prominent box used to highlight important content.
 * It's typically used for transaction end pages or other important information.
 *
 * @example
 * ```html
 * <ngx-govuk-panel title="Application complete">
 *   Your reference number: HDJ2123F
 * </ngx-govuk-panel>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/panel/ GOV.UK Panel}
 */
@Component({
  selector: 'ngx-govuk-panel',
  templateUrl: './panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKPanelComponent {
  /** The title text displayed in the panel. This input is required. */
  readonly title = input.required<string>();
}
