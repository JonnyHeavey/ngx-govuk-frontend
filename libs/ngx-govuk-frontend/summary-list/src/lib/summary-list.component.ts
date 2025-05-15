import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  input,
} from '@angular/core';
import { GovUKSummaryListItemComponent } from './summary-list-item.component';

/**
 * Component for displaying a GOV.UK summary list
 *
 * A summary list is used to summarize information, for example, a user's responses
 * at the end of a form.
 *
 * This component implements the GOV.UK Design System summary list component.
 * It displays information as a list of key/value pairs with optional actions.
 *
 * @see {@link https://design-system.service.gov.uk/components/summary-list/ GOV.UK Summary List}
 */
@Component({
  selector: 'ngx-govuk-summary-list',
  imports: [NgTemplateOutlet],
  templateUrl: './summary-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKSummaryListComponent {
  /**
   * Whether to render the summary list without a border
   */
  readonly noBorder = input<boolean>(false);

  /**
   * Query for all summary list items using signal-based query
   */
  readonly listItems = contentChildren(GovUKSummaryListItemComponent);
}
