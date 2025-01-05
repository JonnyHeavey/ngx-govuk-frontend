import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKCommonFormInputDirective,
  ValueAccessorDirective,
  injectNgControl,
  inputCommonInputs,
} from 'ngx-govuk-frontend/form-utils';

/**
 * A textarea component that follows the GOV.UK Design System guidelines.
 *
 * @example
 * ```html
 * <ngx-govuk-textarea
 *   formControlName="detail"
 *   inputId="detail"
 *   [rows]="5"
 * ></ngx-govuk-textarea>
 * ```
 *
 * @property {string} autocomplete - HTML autocomplete attribute value
 * @property {string} extraClasses - Additional CSS classes to apply to the textarea
 * @property {string} inputId - Required. The ID attribute for the input element.
 * @property {number} rows - Number of visible text rows for the textarea. Defaults to 2.
 */
@Component({
  selector: 'ngx-govuk-textarea',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKTextareaComponent {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  readonly rows = input(2);
}
