import { Directive, TemplateRef } from '@angular/core';

/**
 * This directive implements the value in a GOV.UK Design System summary list component.
 * It applies the appropriate styling for a summary list value.
 *
 * @see {@link https://design-system.service.gov.uk/components/summary-list/ GOV.UK Summary List}
 */
@Directive({
  selector: '[ngxGovUkSummaryListValue]',
})
export class GovUKSummaryListValueDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
