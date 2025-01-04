import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKBaseInputDirective,
  GovUKFormGroupComponent,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';

/**
 * Password input component implementing the GOV.UK Design System password input pattern.
 * Extends GovUKBaseInputDirective to provide common form input functionality.
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
 * @inheritDoc GovUKBaseInputDirective
 * @input {boolean} isVisible - Optional. Whether the password characters should be displayed. Defaults to false
 */
@Component({
  selector: 'ngx-govuk-password-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, GovUKFormGroupComponent],
  templateUrl: './password-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKPasswordInputComponent extends GovUKBaseInputDirective {
  readonly isVisible = signal(false);

  toggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }
}
