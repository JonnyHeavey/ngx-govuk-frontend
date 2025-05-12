import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  input,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Component for an action link in a summary list item
 *
 * This component renders a link that can be used for actions like "Change" or "Remove"
 * in a summary list item. The text for the action is provided via content projection.
 *
 * The component uses a view child to expose its template for use by parent components,
 * allowing for flexible rendering in different contexts.
 *
 * @example
 * ```html
 * <ngx-govuk-summary-list-action href="#" visuallyHiddenText="name">
 *   Change
 * </ngx-govuk-summary-list-action>
 * ```
 *
 * With RouterLink:
 * ```html
 * <ngx-govuk-summary-list-action routerLink="/edit" visuallyHiddenText="name">
 *   Change
 * </ngx-govuk-summary-list-action>
 * ```
 */
@Component({
  selector: 'ngx-govuk-summary-list-action',
  templateUrl: './summary-list-action.component.html',
  imports: [RouterLink],
  styles: [
    `
      a {
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKSummaryListActionComponent {
  /**
   * The URL for the action link
   * Use either href or routerLink
   */
  readonly href = input<string>();

  /**
   * The Angular router link for the action
   * Use either href or routerLink
   */
  readonly routerLink = input<string>();

  /**
   * Optional visually hidden text for improved accessibility
   * This is used to provide context for screen readers, e.g. "Change name"
   */
  readonly visuallyHiddenText = input<string>();

  /**
   * Template reference for the action
   * This is used by parent components to render the action link in the appropriate context
   * (either directly or as part of a list)
   */
  readonly actionTemplate =
    viewChild.required<TemplateRef<unknown>>('actionTemplate');
}
