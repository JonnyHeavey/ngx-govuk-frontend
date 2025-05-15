import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
} from '@angular/core';
import { GovUKSummaryListCardActionsComponent } from './summary-list-card-actions.component';

/**
 * This component implements a card container for the GOV.UK Design System summary list component.
 * It provides a container with a title and optional actions for a summary list.
 *
 * @see https://design-system.service.gov.uk/components/summary-list/
 */
@Component({
  selector: 'ngx-govuk-summary-list-card',
  imports: [NgTemplateOutlet],
  templateUrl: './summary-list-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKSummaryListCardComponent {
  /**
   * The title to display in the card header
   * Required for all summary cards
   */
  readonly title = input.required<string>();

  /**
   * Reference to the actions component if provided
   * Uses signal-based content query to automatically update
   * when the content changes
   */
  readonly cardActions = contentChild(GovUKSummaryListCardActionsComponent);
}
