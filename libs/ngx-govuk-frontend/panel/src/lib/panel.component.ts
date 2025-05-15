import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the GOV.UK Design System panel component.
 * It displays important content on a page, typically a confirmation or summary.
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
