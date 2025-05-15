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
 * This component implements an item in the GOV.UK Design System summary list component.
 * It represents a key/value pair with optional actions in a summary list.
 *
 * @see {@link https://design-system.service.gov.uk/components/summary-list/ GOV.UK Summary List}
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
