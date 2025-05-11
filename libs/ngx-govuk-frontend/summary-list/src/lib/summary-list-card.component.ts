import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { GovUKSummaryListCardActionsComponent } from './summary-list-card-actions.component';

/**
 * Component for displaying a summary list in a card format
 *
 * This component wraps a summary list in a card with a title and optional actions.
 * It implements the GOV.UK summary card component according to the design system.
 *
 * When actions are provided via a GovUKSummaryListCardActionsComponent, they are
 * rendered in the card header. The component uses a signal-based query to access
 * the action components and their templates for rendering.
 *
 * @example
 * ```html
 * <ngx-govuk-summary-list-card title="University of Gloucestershire">
 *   <ngx-govuk-summary-list-card-actions>
 *     <ngx-govuk-summary-list-action href="#" visuallyHiddenText="of University of Gloucestershire">
 *       Delete choice
 *     </ngx-govuk-summary-list-action>
 *   </ngx-govuk-summary-list-card-actions>
 *   <ngx-govuk-summary-list>
 *     <ngx-govuk-summary-list-item key="Course" value="English (3DMD)"></ngx-govuk-summary-list-item>
 *     <ngx-govuk-summary-list-item key="Location" value="School name, Road, City, SW1 1AA"></ngx-govuk-summary-list-item>
 *   </ngx-govuk-summary-list>
 * </ngx-govuk-summary-list-card>
 * ```
 */
@Component({
  selector: 'ngx-govuk-summary-list-card',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink],
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
