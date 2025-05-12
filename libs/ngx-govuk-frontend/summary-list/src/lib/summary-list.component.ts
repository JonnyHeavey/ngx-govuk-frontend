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
 * This component implements the GOV.UK summary list component.
 *
 * @example
 * ```html
 * <ngx-govuk-summary-list>
 *   <ngx-govuk-summary-list-item key="Name">
 *     <ng-template ngxGovUkSummaryListValue>
 *       Sarah Philips
 *     </ng-template>
 *     <ngx-govuk-summary-list-actions>
 *       <ngx-govuk-summary-list-action href="#" text="Change" visuallyHiddenText="name"></ngx-govuk-summary-list-action>
 *     </ngx-govuk-summary-list-actions>
 *   </ngx-govuk-summary-list-item>
 * </ngx-govuk-summary-list>
 * ```
 *
 * With card:
 * ```html
 * <ngx-govuk-summary-list-card title="University of Gloucestershire">
 *   <ngx-govuk-summary-list-card-actions>
 *     <ngx-govuk-summary-list-action href="#" text="Delete choice" visuallyHiddenText="of University of Gloucestershire"></ngx-govuk-summary-list-action>
 *   </ngx-govuk-summary-list-card-actions>
 *   <ngx-govuk-summary-list>
 *     <ngx-govuk-summary-list-item key="Course" value="English (3DMD)"></ngx-govuk-summary-list-item>
 *     <ngx-govuk-summary-list-item key="Location" value="School name, Road, City, SW1 1AA"></ngx-govuk-summary-list-item>
 *   </ngx-govuk-summary-list>
 * </ngx-govuk-summary-list-card>
 * ```
 */
@Component({
  selector: 'ngx-govuk-summary-list',
  standalone: true,
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
