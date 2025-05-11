import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { GovUKSummaryListActionComponent } from './summary-list-action.component';

/**
 * Component for the actions container of a summary list item
 *
 * This component is used as a container for action links in a summary list item.
 * It will collect all the action components and render them appropriately using
 * their templates. If there is more than one action, they will be rendered as a list
 * according to the GOV.UK Design System specifications.
 *
 * The component uses a signal-based query to efficiently track and render child
 * action components without manual subscription management.
 *
 * @example
 * ```html
 * <ngx-govuk-summary-list-actions>
 *   <ngx-govuk-summary-list-action href="#" visuallyHiddenText="name">
 *     Change
 *   </ngx-govuk-summary-list-action>
 * </ngx-govuk-summary-list-actions>
 * ```
 *
 * With multiple actions:
 * ```html
 * <ngx-govuk-summary-list-actions>
 *   <ngx-govuk-summary-list-action href="#" visuallyHiddenText="contact details">
 *     Change
 *   </ngx-govuk-summary-list-action>
 *   <ngx-govuk-summary-list-action href="#" visuallyHiddenText="contact details">
 *     Remove
 *   </ngx-govuk-summary-list-action>
 * </ngx-govuk-summary-list-actions>
 * ```
 */
@Component({
  selector: 'ngx-govuk-summary-list-actions',
  standalone: true,
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
