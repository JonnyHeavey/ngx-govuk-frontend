import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';
import { GovUKTaskListItemDirective } from './task-list-item.directive';

/**
 * Component for displaying a GOV.UK task list
 *
 * A task list helps users understand:
 * - the tasks they need to complete
 * - the order they need to complete tasks in
 * - when they have completed a task
 *
 * This component implements the GOV.UK task list pattern.
 *
 * @example
 * ```html
 * <ngx-govuk-task-list>
 *   <ngx-govuk-task-list-item
 *     [title]="'Complete task'"
 *     [href]="'/task-url'"
 *     [statusText]="'Completed'"
 *   ></ngx-govuk-task-list-item>
 * </ngx-govuk-task-list>
 * ```
 */

@Component({
  selector: 'ngx-govuk-task-list',
  templateUrl: './task-list.component.html',
  imports: [GovUKTagComponent, RouterLink],
  styles: [
    `
      a {
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTaskListComponent {
  /**
   * Query for all task list item directives using signal-based query
   * This allows the component to iterate through the child task list items
   */
  readonly taskItems = contentChildren(GovUKTaskListItemDirective);
}
