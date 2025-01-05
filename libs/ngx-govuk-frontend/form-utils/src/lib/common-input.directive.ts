import { Directive, input } from '@angular/core';

export const inputCommonInputs = ['autocomplete', 'extraClasses', 'inputId'];

@Directive({
  standalone: true,
})
export class GovUKCommonFormInputDirective {
  readonly autocomplete = input<AutoFill>();
  readonly extraClasses = input<string>();
  readonly inputId = input<string>();
}
