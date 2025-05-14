import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'ngx-govuk-accordion-item',
  templateUrl: './accordion-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKAccordionItemComponent {
  readonly itemId = input.required<string>();
  readonly heading = input.required<string>();
  readonly summary = input<string>();
  readonly expanded = input(false);

  readonly content = viewChild.required<TemplateRef<unknown>>('content');
}
