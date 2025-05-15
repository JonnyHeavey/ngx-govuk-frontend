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
 * This component implements the GOV.UK Design System text input component.
 * It allows users to enter text that's a single line.
 *
 * @see {@link https://design-system.service.gov.uk/components/text-input/ GOV.UK Text Input}
 *
 * @property {string} autocomplete - Optional. The HTML autocomplete attribute value. Defaults to 'off'.
 * @property {string} extraClasses - Optional. Additional CSS classes to apply to the input element.
 * @property {string} inputId - Optional. The ID attribute for the input element.
 * @property {string} prefix - Optional. Text or symbol displayed before the input field (e.g., '£').
 * @property {string} suffix - Optional. Text or symbol displayed after the input field (e.g., 'per day').
 */
@Component({
  selector: 'ngx-govuk-text-input',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKTextInputComponent {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  readonly prefix = input<string>();
  readonly suffix = input<string>();
}
