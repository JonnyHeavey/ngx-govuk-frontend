/* eslint-disable @angular-eslint/directive-selector */
import { booleanAttribute, Directive, input } from '@angular/core';
import { GovUKTagColor } from 'ngx-govuk-frontend/tag';

/**
 * Directive for an individual task list item
 *
 * This directive is used declaratively and rendered by the parent task list component.
 * It doesn't render anything itself - it just provides a declarative API for the task list.
 */
@Directive({
  selector: 'ngx-govuk-task-list-item',
})
export class GovUKTaskListItemDirective {
  /**
   * The title of the task to display
   * Required field that will be displayed as the main text for the task
   */
  readonly title = input.required<string>();

  /**
   * Text to display as the status of the task
   * This will be shown either as plain text or within a tag depending on whether tagColor is provided
   */
  readonly statusText = input.required<string>();

  /**
   * Optional hint text to display below the task title
   * Provides additional context or guidance for the task
   */
  readonly hint = input<string>();

  /**
   * Optional URL for the task link
   * If provided and noLink is false, the task title will be rendered as a link to this URL
   */
  readonly href = input<string>();

  /**
   * Optional Angular router link for the task
   * If provided and noLink is false, the task title will be rendered as a link to this URL
   */
  readonly routerLink = input<string>();

  /**
   * Color of the tag to use for the status
   * If provided, the status will be shown as a tag with this color
   * If not provided, the status will be shown as plain text
   */
  readonly tagColor = input<GovUKTagColor>();

  /**
   * When true, the task item will not be rendered as a link
   * This is useful for tasks that are not yet available or accessible
   * @default false
   */
  readonly noLink = input(false, { transform: booleanAttribute });
}
