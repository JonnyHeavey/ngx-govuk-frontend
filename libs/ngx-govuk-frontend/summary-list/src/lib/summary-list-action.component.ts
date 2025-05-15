import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  input,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * This component implements an action link in a GOV.UK Design System summary list component.
 * It provides a link for changing information in a summary list item.
 *
 * @see {@link https://design-system.service.gov.uk/components/summary-list/ GOV.UK Summary List}
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
