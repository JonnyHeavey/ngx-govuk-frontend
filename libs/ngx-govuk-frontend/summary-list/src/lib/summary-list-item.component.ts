import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  contentChild,
  input,
  viewChild,
} from '@angular/core';
import { GovUKSummaryListActionsComponent } from './summary-list-actions.component';
import { GovUKSummaryListValueDirective } from './summary-list-value.directive';

/**
 * Component for an individual item in a summary list
 *
 * This component represents a single row in a summary list with a key, value, and optional actions.
 * The value and actions can be either provided as inputs or as content via directives.
 *
 * @example
 * ```html
 * <ngx-govuk-summary-list-item key="Name">
 *   <ng-template ngxGovUkSummaryListValue>
 *     Sarah Philips
 *   </ng-template>
 *   <ngx-govuk-summary-list-actions>
 *     <ngx-govuk-summary-list-action href="#" text="Change" visuallyHiddenText="name"></ngx-govuk-summary-list-action>
 *   </ngx-govuk-summary-list-actions>
 * </ngx-govuk-summary-list-item>
 * ```
 */
@Component({
  selector: 'ngx-govuk-summary-list-item',
  imports: [NgTemplateOutlet],
  templateUrl: './summary-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKSummaryListItemComponent {
  /**
   * The key to display in the summary list item
   * Required for all summary list items
   */
  readonly key = input.required<string>();

  /**
   * Optional simple text value to display
   * Only used if no value template is provided
   */
  readonly value = input<string>('');

  /**
   * Reference to the value directive if provided
   * Allows for complex HTML content in the value
   */
  readonly valueTemplate = contentChild(GovUKSummaryListValueDirective);

  /**
   * Reference to the actions component if provided
   * Allows for actions to be specified as content
   */
  readonly actions = contentChild(GovUKSummaryListActionsComponent);

  /**
   * Template reference for the summary list item
   * This is used by the parent component for rendering
   */
  readonly itemTemplate =
    viewChild.required<TemplateRef<unknown>>('itemTemplate');
}
