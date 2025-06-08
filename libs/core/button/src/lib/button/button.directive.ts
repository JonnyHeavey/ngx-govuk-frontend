import { booleanAttribute, Directive, input } from '@angular/core';

@Directive()
export class ButtonDirective {
  /** Whether the button is disabled. Defaults to false. */
  readonly disabled = input(false, { transform: booleanAttribute });
}
