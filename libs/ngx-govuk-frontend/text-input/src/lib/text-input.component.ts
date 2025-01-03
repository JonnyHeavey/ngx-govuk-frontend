import { NgClass } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  injectNgControl,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';

/**
 * A form input component that follows the GOV.UK Design System styling and behavior.
 *
 * This component provides a text input field with optional features like hints, prefixes, and suffixes.
 * It integrates with Angular's form controls and supports accessibility features.
 *
 * @example
 * ```html
 * <ngx-govuk-text-input
 *   formControlName="firstName"
 *   inputId="first-name"
 *   label="First name"
 *   hint="Enter your legal first name"
 *   autocomplete="given-name"
 * ></ngx-govuk-text-input>
 * ```
 *
 * @property {string} inputId - Required. The ID attribute for the input element.
 * @property {string} label - Required. The label text for the input field.
 * @property {boolean} isPageTitle - Optional. When true, renders the label as a page heading (h1). Defaults to false.
 * @property {string} autocomplete - Optional. The HTML autocomplete attribute value. Defaults to 'off'.
 * @property {string} extraClasses - Optional. Additional CSS classes to apply to the input element.
 * @property {string} hint - Optional. Help text displayed below the label.
 * @property {string} prefix - Optional. Text or symbol displayed before the input field (e.g., '£').
 * @property {string} suffix - Optional. Text or symbol displayed after the input field (e.g., 'per day').
 */
@Component({
  selector: 'ngx-govuk-text-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKTextInputComponent {
  readonly ngControl = injectNgControl();

  readonly inputId = input.required<string>();
  readonly label = input.required<string>();

  readonly isPageTitle = input(false, { transform: booleanAttribute });
  readonly autocomplete = input('off');
  readonly extraClasses = input('');
  readonly hint = input('');
  readonly prefix = input('');
  readonly suffix = input('');
}
