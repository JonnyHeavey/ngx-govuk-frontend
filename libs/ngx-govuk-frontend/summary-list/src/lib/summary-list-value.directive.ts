import { Directive, TemplateRef } from '@angular/core';

/**
 * This directive implements the value in a GOV.UK Design System summary list component.
 * It applies the appropriate styling for a summary list value.
 *
 * @see https://design-system.service.gov.uk/components/summary-list/
 */
@Directive({
  selector: '[ngxGovUkSummaryListValue]',
})
export class GovUKSummaryListValueDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
