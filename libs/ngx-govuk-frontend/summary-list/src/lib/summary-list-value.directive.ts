import { Directive, TemplateRef } from '@angular/core';

/**
 * Directive for the value content of a summary list item
 *
 * This directive allows you to define the value content as a template
 * which can include complex HTML.
 *
 * @example
 * ```html
 * <ng-template ngxGovUkSummaryListValue>
 *   <p>72 Guild Street<br>London<br>SE23 6FH</p>
 * </ng-template>
 * ```
 */
@Directive({
  selector: '[ngxGovUkSummaryListValue]',
  standalone: true,
})
export class GovUKSummaryListValueDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
