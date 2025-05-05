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
 * A form input component that follows the GOV.UK Design System styling and behavior.
 *
 * This component provides a text input field with optional features like autocomplete, prefixes, and suffixes.
 * It integrates with Angular's form controls and supports accessibility features.
 *
 * @example
 * ```html
 * <ngx-govuk-text-input
 *   formControlName="firstName"
 *   inputId="first-name"
 *   autocomplete="given-name"
 * ></ngx-govuk-text-input>
 * ```
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
    ]
})
export class GovUKTextInputComponent {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  readonly prefix = input<string>();
  readonly suffix = input<string>();
}
