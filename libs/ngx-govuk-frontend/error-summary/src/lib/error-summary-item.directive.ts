/* eslint-disable @angular-eslint/directive-selector */
import { Directive, input } from '@angular/core';

/**
 * Directive for an individual error summary item
 *
 * This directive is used declaratively and rendered by the parent error summary component.
 * It doesn't render anything itself - it just provides a declarative API for the error summary.
 *
 * The component uses Angular Router's fragment navigation to enable scrolling to the target element.
 * For proper scrolling behavior, you must enable anchor scrolling in your application's router
 * configuration using either:
 *
 * - RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })
 * - withInMemoryScrolling({ anchorScrolling: 'enabled' })
 */
@Directive({
  selector: 'ngx-govuk-error-summary-item',
})
export class GovUKErrorSummaryItemDirective {
  /**
   * The text of the error message to display
   * Required field that will be displayed as the error message
   */
  readonly text = input.required<string>();

  /**
   * Required targetId attribute for the error link
   * This should reference the id of the form field with the error.
   * The component will use Angular Router's fragment navigation to create a link to this element.
   *
   * Note: For proper scrolling behavior, anchor scrolling must be enabled in your router configuration.
   */
  readonly targetId = input.required<string>();
}
