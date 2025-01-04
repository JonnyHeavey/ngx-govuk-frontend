import { booleanAttribute, Directive, input } from '@angular/core';

/**
 * Array of input property names used by the GovUKFormGroupDirective.
 * Used to configure host directive inputs when applying the directive to a component.
 */
export const formGroupDirectiveInputs = [
  'inputId',
  'label',
  'hint',
  'isPageTitle',
];

/**
 * A directive that provides form group functionality following the GOV.UK Design System patterns.
 * Used internally by GovUKFormGroupComponent to manage form group inputs and state.
 *
 * @example
 * ```ts
 * @Component({
 *   hostDirectives: [
 *     {
 *       directive: GovUKFormGroupDirective,
 *       inputs: formGroupDirectiveInputs,
 *     },
 *   ],
 * })
 * ```
 *
 * @property {string} inputId - Required. The ID attribute for the input element.
 * @property {string} label - Required. The label text for the input field.
 * @property {string} hint - Optional. Help text displayed below the label.
 * @property {boolean} isPageTitle - Optional. When true, renders the label as a page heading (h1). Defaults to false.
 */
@Directive({
  standalone: true,
})
export class GovUKFormGroupDirective {
  readonly inputId = input.required<string>();
  readonly label = input.required<string>();

  readonly hint = input<string>();
  readonly isPageTitle = input(false, { transform: booleanAttribute });
}
