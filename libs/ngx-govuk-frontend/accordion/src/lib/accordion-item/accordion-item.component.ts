import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';

/**
 * This component implements a section in the GOV.UK Design System accordion component.
 * It contains the heading, optional summary, and content for an accordion section.
 *
 * @see https://design-system.service.gov.uk/components/accordion/
 */
@Component({
  selector: 'ngx-govuk-accordion-item',
  templateUrl: './accordion-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKAccordionItemComponent {
  /** The unique identifier for the accordion item. This input is required. */
  readonly itemId = input.required<string>();

  /** The text displayed in the accordion item heading. This input is required. */
  readonly heading = input.required<string>();

  /** Optional summary text displayed below the heading. */
  readonly summary = input<string>();

  /** Whether the accordion item is expanded. Defaults to false. */
  readonly expanded = input(false, { transform: booleanAttribute });

  /** Reference to the template containing the accordion item's content. */
  readonly content = viewChild.required<TemplateRef<unknown>>('content');
}
