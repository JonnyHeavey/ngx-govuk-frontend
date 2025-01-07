import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

@Component({
  selector: 'ngx-govuk-fieldset',
  standalone: true,
  templateUrl: './fieldset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFieldsetComponent {
  readonly legend = input.required<string>();

  readonly errorMessage = input<string>();
  readonly hint = input<string>();
  readonly isPageTitle = input(false, { transform: booleanAttribute });
}
