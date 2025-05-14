/* eslint-disable @angular-eslint/directive-selector */
import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
  selector: 'ngx-govuk-radio-option',
  })
export class GovUKRadioOptionDirective {
  readonly label = input.required<string>();
  readonly value = input.required<string>();

  readonly hint = input<string>();
  readonly isDivided = input(false, { transform: booleanAttribute });
}
