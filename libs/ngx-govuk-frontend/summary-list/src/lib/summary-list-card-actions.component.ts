import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { GovUKSummaryListActionComponent } from './summary-list-action.component';

/**
 * This component implements the actions container in a GOV.UK Design System summary list card.
 * It provides a container for action links in a summary list card.
 *
 * @see {@link https://design-system.service.gov.uk/components/summary-list/ GOV.UK Summary List}
 */
@Component({
  selector: 'ngx-govuk-summary-list-card-actions',
  templateUrl: './summary-list-card-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKSummaryListCardActionsComponent {
  /**
   * Query for all actions using signal-based query
   * This allows the component to collect all the action components and
   * make them available to the parent card component for rendering
   */
  readonly actions = contentChildren(GovUKSummaryListActionComponent);
}
