import { booleanAttribute, Directive, input } from '@angular/core';
import { injectNgControl } from './inject-control';

/**
 * A base directive that provides common functionality for GOV.UK form input components.
 *
 * This directive implements shared properties and behaviors used across different form input types
 * like text inputs, textareas, etc. It handles common features like labels, hints, and form control integration.
 *
 * @example
 * ```ts
 * @Component({
 *   // ...
 *   hostDirectives: [ValueAccessorDirective],
 * })
 * export class MyInputComponent extends GovUKBaseInputDirective {
 *   // Additional component-specific properties and methods
 * }
 * ```
 *
 * @property {string} inputId - Required. The ID attribute for the input element.
 * @property {string} label - Required. The label text for the input field.
 * @property {boolean} isPageTitle - Optional. When true, renders the label as a page heading (h1). Defaults to false.
 * @property {string} autocomplete - Optional. The HTML autocomplete attribute value. Defaults to 'off'.
 * @property {string} extraClasses - Optional. Additional CSS classes to apply to the input element.
 * @property {string} hint - Optional. Help text displayed below the label.
 */
@Directive({
  standalone: true,
})
export class GovUKBaseInputDirective {
  readonly ngControl = injectNgControl();

  readonly inputId = input.required<string>();
  readonly label = input.required<string>();

  readonly autocomplete = input<AutoFill>('off');
  readonly extraClasses = input('');
  readonly hint = input('');
  readonly isPageTitle = input(false, { transform: booleanAttribute });
}
