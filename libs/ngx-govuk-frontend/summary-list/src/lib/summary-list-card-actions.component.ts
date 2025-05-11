import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { GovUKSummaryListActionComponent } from './summary-list-action.component';

/**
 * Component for actions in a summary list card
 *
 * This component is used as a container for action links in a summary list card header.
 * It projects the action components directly but also collects them using a signal-based
 * query to make them available to the parent card component for rendering in the card header.
 *
 * The signal-based query ensures that the parent component always has an up-to-date list
 * of actions without requiring manual subscription management.
 *
 * @example
 * ```html
 * <ngx-govuk-summary-list-card-actions>
 *   <ngx-govuk-summary-list-action href="#" visuallyHiddenText="of University of Gloucestershire">
 *     Delete choice
 *   </ngx-govuk-summary-list-action>
 *   <ngx-govuk-summary-list-action href="#" visuallyHiddenText="from University of Gloucestershire">
 *     Withdraw
 *   </ngx-govuk-summary-list-action>
 * </ngx-govuk-summary-list-card-actions>
 * ```
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
