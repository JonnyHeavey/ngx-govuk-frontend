import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  GovUKCommonFormInputDirective,
  ValueAccessorDirective,
  injectNgControl,
  inputCommonInputs,
} from 'ngx-govuk-frontend/form-utils';

interface DateInputParts {
  day?: string;
  month?: string;
  year?: string;
}

/**
 * A form component for date input that follows the GOV.UK Design System styling and behavior.
 *
 * This component provides a set of input fields for day, month, and year with proper validation and styling.
 * It integrates with Angular's form controls and supports accessibility features.
 *
 * @example
 * ```html
 * <ngx-govuk-date-input
 *   formControlName="dateOfBirth"
 *   inputId="date-of-birth"
 * ></ngx-govuk-date-input>
 * ```
 *
 * @property {string} inputId - Optional. The ID prefix for the input elements.
 * @property {string} extraClasses - Optional. Additional CSS classes to apply to the input elements.
 */
@Component({
  selector: 'ngx-govuk-date-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './date-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKDateInputComponent {
  // export class GovUKDateInputComponent implements ControlValueAccessor {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  protected dateForm = new FormGroup(
    {
      day: new FormControl<string>('', [
        Validators.pattern(/^([1-9]|0[1-9]|[12]\d|3[01])$/),
      ]),
      month: new FormControl<string>('', [
        Validators.pattern(/^([1-9]|0[1-9]|1[012])$/),
      ]),
      year: new FormControl<string>('', [
        Validators.pattern(/^\d{4}$/),
        Validators.min(1900),
        Validators.max(new Date().getFullYear() + 100),
      ]),
    },
    { validators: this.dateValidator() },
  );

  constructor() {
    // Handle changes in the internal form group
    this.dateForm.valueChanges.subscribe((value) => {
      const day = value.day ?? '';
      const month = value.month ?? '';
      const year = value.year ?? '';
      this.onDateFormChange({ day, month, year });

      // Collect all errors from the form and individual controls
      const errors: Record<string, unknown> = {};

      // Add form-level errors (like invalidDate)
      if (this.dateForm.errors) {
        Object.assign(errors, this.dateForm.errors);
      }

      // Add field-level errors with prefixes
      const dayControl = this.dateForm.get('day');
      const monthControl = this.dateForm.get('month');
      const yearControl = this.dateForm.get('year');

      if (dayControl?.errors) {
        Object.entries(dayControl.errors).forEach(([key, value]) => {
          errors[`day_${key}`] = value;
        });
      }

      if (monthControl?.errors) {
        Object.entries(monthControl.errors).forEach(([key, value]) => {
          errors[`month_${key}`] = value;
        });
      }

      if (yearControl?.errors) {
        Object.entries(yearControl.errors).forEach(([key, value]) => {
          errors[`year_${key}`] = value;
        });
      }

      // Set errors on the parent control if there are any
      if (Object.keys(errors).length > 0) {
        this.ngControl.control?.setErrors(errors);
      } else {
        // Clear errors if all fields are valid
        this.ngControl.control?.setErrors(null);
      }
    });

    // Handle changes from the parent form control
    this.ngControl.valueChanges?.subscribe((value) => {
      this.updateDateForm(value);
    });
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.dateForm.disable();
    } else {
      this.dateForm.enable();
    }
  }

  // Expose date parts for testing
  getDateParts(): DateInputParts {
    return {
      day: this.dateForm.get('day')?.value || '',
      month: this.dateForm.get('month')?.value || '',
      year: this.dateForm.get('year')?.value || '',
    };
  }

  // Custom validator to check if a date is valid
  private dateValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const formGroup = control as FormGroup;
      const day = formGroup.get('day')?.value;
      const month = formGroup.get('month')?.value;
      const year = formGroup.get('year')?.value;

      // If any field is empty, don't perform validation yet
      if (!day || !month || !year) {
        return null;
      }

      // Convert string values to numbers
      const dayNum = parseInt(day, 10);
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);

      // Create a date object - note months are 0-indexed in JS
      const date = new Date(yearNum, monthNum - 1, dayNum);

      // Check if the date is valid
      // For example, 31/04/2020 (April 31st) is not valid
      if (
        date.getFullYear() !== yearNum ||
        date.getMonth() !== monthNum - 1 ||
        date.getDate() !== dayNum
      ) {
        return { invalidDate: true };
      }

      return null;
    };
  }

  // Process changes from internal date form
  private onDateFormChange(value: {
    day: string;
    month: string;
    year: string;
  }): void {
    const { day, month, year } = value;

    if (!day && !month && !year) {
      this.ngControl.control?.setValue(null);
      return;
    }

    const paddedDay = day.padStart(2, '0');
    const paddedMonth = month.padStart(2, '0');

    if (day && month && year) {
      // Full date is available, use ISO format
      this.ngControl.control?.setValue(`${year}-${paddedMonth}-${paddedDay}`);
    } else {
      // Partial date, pass as object
      this.ngControl.control?.setValue({
        day: paddedDay,
        month: paddedMonth,
        year,
      });
    }

    this.ngControl.control.markAsTouched();
  }

  // Update internal date form based on parent value
  private updateDateForm(value: string | DateInputParts | null): void {
    if (!value) {
      this.dateForm.reset(
        { day: '', month: '', year: '' },
        { emitEvent: false },
      );
      return;
    }

    let day = '';
    let month = '';
    let year = '';

    if (typeof value === 'string') {
      // Handle ISO date format (YYYY-MM-DD)
      const dateParts = value.split('-');
      if (dateParts.length === 3) {
        year = dateParts[0];
        month = dateParts[1].replace(/^0/, ''); // Remove leading zero
        day = dateParts[2].replace(/^0/, ''); // Remove leading zero
      }
    } else {
      // Handle object format { day, month, year }
      day = value.day?.replace(/^0/, '') || '';
      month = value.month?.replace(/^0/, '') || '';
      year = value.year || '';
    }

    this.dateForm.setValue({ day, month, year }, { emitEvent: false });
  }

  protected getInputId(part: string): string | null {
    return this.commonFormInput.inputId()
      ? `${this.commonFormInput.inputId()}-${part}`
      : null;
  }

  protected hasFieldError(field: string): boolean {
    const control = this.dateForm.get(field);
    return !!control && control.touched && !!control.errors;
  }
}
