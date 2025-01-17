import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-govuk-tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTabComponent {
  readonly id = input.required<string>();
  readonly title = input.required<string>();

  readonly tabContent = viewChild.required<TemplateRef<unknown>>('tabContent');
}
