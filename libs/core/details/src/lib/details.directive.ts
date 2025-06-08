import { Directive, input } from '@angular/core';

@Directive()
export class DetailsDirective {
  /** The text shown in the details summary element. This input is required. */
  readonly summary = input.required<string>();
}
