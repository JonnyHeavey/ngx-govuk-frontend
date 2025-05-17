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
 * This component implements the GOV.UK Design System password input component.
 * It allows users to enter a password with the option to show or hide the entered text.
 *
 * @see https://design-system.service.gov.uk/components/password-input/
 */
@Component({
  selector: 'ngx-govuk-password-input',
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
