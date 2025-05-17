import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';

/**
 * This component implements a single tab panel in the GOV.UK Design System tabs component.
 * It contains the content to display when a tab is selected.
 *
 * @see https://design-system.service.gov.uk/components/tabs/
 */
@Component({
  selector: 'ngx-govuk-tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTabComponent {
  /** The unique identifier for the tab. This input is required. */
  readonly id = input.required<string>();

  /** The text displayed in the tab. This input is required. */
  readonly title = input.required<string>();

  /** Reference to the template containing the tab's content. */
  readonly tabContent = viewChild.required<TemplateRef<unknown>>('tabContent');
}
