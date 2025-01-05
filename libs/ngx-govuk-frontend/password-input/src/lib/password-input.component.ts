import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKCommonFormInputDirective,
  ValueAccessorDirective,
  injectNgControl,
  inputCommonInputs,
} from 'ngx-govuk-frontend/form-utils';

/**
 * Password input component implementing the GOV.UK Design System password input pattern.
 *
 * @example
 * ```html
 * <ngx-govuk-password-input inputId="password" />
 * ```
 *
 * @property {string} autocomplete - Optional. The HTML autocomplete attribute value. Defaults to 'off'.
 * @property {string} extraClasses - Optional. Additional CSS classes to apply to the input element.
 * @property {string} inputId - The ID attribute for the input element.
 */
@Component({
  selector: 'ngx-govuk-password-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './password-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKPasswordInputComponent {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  readonly isVisible = signal(false);

  toggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }
}
