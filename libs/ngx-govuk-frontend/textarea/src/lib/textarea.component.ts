import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKTextareaComponent {
  readonly ngControl = injectNgControl();

  readonly autocomplete = input<AutoFill>();
  readonly extraClasses = input<string>();
  readonly inputId = input<string>();
  readonly rows = input(2);
}
