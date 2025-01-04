import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKFormGroupComponent,
  GovUKFormGroupDirective,
  formGroupDirectiveInputs,
} from 'ngx-govuk-frontend/form-group';
import {
  ValueAccessorDirective,
  injectNgControl,
} from 'ngx-govuk-frontend/form-utils';

/**
 * A textarea component that follows the GOV.UK Design System guidelines.
 *
 * @example
 * ```html
 * <ngx-govuk-textarea
 *   formControlName="detail"
 *   label="Can you provide more detail?"
 *   inputId="detail"
 *   hint="Do not include personal information"
 *   [rows]="5"
 * ></ngx-govuk-textarea>
 * ```
 *
 * @property {string} inputId - Required. The ID attribute for the input element.
 * @property {string} label - Required. The label text for the input field.
 * @property {string} hint - Optional. Help text displayed below the label.
 * @property {boolean} isPageTitle - Optional. When true, renders the label as a page heading (h1). Defaults to false.
 * @property {string} autocomplete - HTML autocomplete attribute value
 * @property {string} extraClasses - Additional CSS classes to apply to the textarea
 * @property {number} rows - Number of visible text rows for the textarea. Defaults to 2.
 */
@Component({
  selector: 'ngx-govuk-textarea',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, GovUKFormGroupComponent],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    {
      directive: GovUKFormGroupDirective,
      inputs: formGroupDirectiveInputs,
    },
  ],
})
export class GovUKTextareaComponent {
  readonly ngControl = injectNgControl();
  readonly formGroup = inject(GovUKFormGroupDirective);

  readonly autocomplete = input<AutoFill>();
  readonly extraClasses = input<string>();
  readonly rows = input(2);
}
