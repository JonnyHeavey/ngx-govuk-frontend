import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
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
 * Password input component implementing the GOV.UK Design System password input pattern.
 *
 * @example
 * ```html
 * <ngx-govuk-password-input
 *   label="Enter password"
 *   hint="Must be at least 8 characters"
 *   [isVisible]="true">
 * </ngx-govuk-password-input>
 * ```
 *
 * @property {string} inputId - Required. The ID attribute for the input element.
 * @property {string} label - Required. The label text for the input field.
 * @property {string} hint - Optional. Help text displayed below the label.
 * @property {boolean} isPageTitle - Optional. When true, renders the label as a page heading (h1). Defaults to false.
 * @property {string} autocomplete - Optional. The HTML autocomplete attribute value. Defaults to 'off'.
 * @property {string} extraClasses - Optional. Additional CSS classes to apply to the input element.
 * @property {boolean} isVisible - Optional. Whether the password characters should be displayed. Defaults to false
 */
@Component({
  selector: 'ngx-govuk-password-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, GovUKFormGroupComponent],
  templateUrl: './password-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    {
      directive: GovUKFormGroupDirective,
      inputs: formGroupDirectiveInputs,
    },
  ],
})
export class GovUKPasswordInputComponent {
  readonly ngControl = injectNgControl();
  readonly formGroup = inject(GovUKFormGroupDirective);

  readonly autocomplete = input<AutoFill>();
  readonly extraClasses = input<string>();

  readonly isVisible = signal(false);

  toggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }
}
