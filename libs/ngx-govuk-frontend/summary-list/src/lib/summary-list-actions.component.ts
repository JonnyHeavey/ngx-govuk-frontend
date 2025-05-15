import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { GovUKSummaryListActionComponent } from './summary-list-action.component';

/**
 * This component implements the actions container in a GOV.UK Design System summary list item.
 * It provides a container for action links in a summary list item.
 *
 * @see {@link https://design-system.service.gov.uk/components/summary-list/ GOV.UK Summary List}
 */
@Component({
  selector: 'ngx-govuk-summary-list-actions',
  imports: [NgTemplateOutlet],
  templateUrl: './summary-list-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKSummaryListActionsComponent {
  /**
   * Query for all actions using signal-based query
   * This allows the component to collect all the action components and
   * automatically update when they change
   */
  readonly actions = contentChildren(GovUKSummaryListActionComponent);
}
