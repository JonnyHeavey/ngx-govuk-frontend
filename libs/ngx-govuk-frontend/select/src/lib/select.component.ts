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
 * Interface defining an option in the select dropdown.
 */
export interface GovUKSelectOption {
  /** The displayed text for the option */
  label: string;
  /** The value that will be submitted when the option is selected */
  value: string;
}

/**
 * This component implements the GOV.UK Design System select component.
 * It allows users to choose an option from a dropdown list.
 *
 * @example
 * ```html
 * <ngx-govuk-select
 *   [options]="[
 *     { value: 'england', label: 'England' },
 *     { value: 'scotland', label: 'Scotland' },
 *     { value: 'wales', label: 'Wales' },
 *     { value: 'northern-ireland', label: 'Northern Ireland' }
 *   ]"
 *   formControlName="country"
 *   inputId="country"
 *   label="Country"
 * ></ngx-govuk-select>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/select/ GOV.UK Select}
 */
@Component({
  selector: 'ngx-govuk-select',
  imports: [ReactiveFormsModule],
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKSelectComponent {
  /** The Angular form control associated with this select input. */
  readonly ngControl = injectNgControl();

  /** Reference to the common form input directive that provides shared functionality. */
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  /** The list of options to display in the select dropdown. This input is required. */
  readonly options = input.required<GovUKSelectOption[]>();
}
