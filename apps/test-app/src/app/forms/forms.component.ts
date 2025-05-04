import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKBackLinkComponent } from 'ngx-govuk-frontend/back-link';
import { GovUKCheckboxComponent } from 'ngx-govuk-frontend/checkbox';
import { GovUKDateInputComponent } from 'ngx-govuk-frontend/date-input';
import { GovUKFieldsetComponent } from 'ngx-govuk-frontend/fieldset';
import { GovUKFileUploadComponent } from 'ngx-govuk-frontend/file-upload';
import { GovUKFormGroupComponent } from 'ngx-govuk-frontend/form-group';
import { GovUKPasswordInputComponent } from 'ngx-govuk-frontend/password-input';
import {
  GovUKRadioGroupComponent,
  GovUKRadioOptionDirective,
} from 'ngx-govuk-frontend/radio';
import {
  GovUKSelectComponent,
  GovUKSelectOption,
} from 'ngx-govuk-frontend/select';
import { GovUKTextInputComponent } from 'ngx-govuk-frontend/text-input';
import { GovUKTextareaComponent } from 'ngx-govuk-frontend/textarea';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    GovUKFormGroupComponent,
    GovUKFieldsetComponent,
    GovUKBackLinkComponent,
    GovUKTextInputComponent,
    GovUKTextareaComponent,
    GovUKSelectComponent,
    GovUKPasswordInputComponent,
    GovUKCheckboxComponent,
    GovUKRadioGroupComponent,
    GovUKFileUploadComponent,
    GovUKRadioOptionDirective,
    GovUKDateInputComponent,
  ],
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  readonly form = inject(FormBuilder).nonNullable.group({
    colour: [
      'blue',
      Validators.compose([Validators.required, Validators.minLength(2)]),
    ],
    earning: '',
    weight: '',
    detail: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(100)]),
    ],
    price: '',
    password: ['', Validators.required],
    rememberMe: false,
    choice: 'green',
    selection: '',
    file: '',
    shortComment: ['', Validators.maxLength(50)],
    dateOfBirth: ['', Validators.required],
  });

  colours: GovUKSelectOption[] = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  constructor() {
    this.form.valueChanges.subscribe((changes) =>
      console.log('Form Model Update', changes),
    );
  }

  getDateErrorMessage(): string {
    const control = this.form.get('dateOfBirth');
    if (!control?.touched) {
      return '';
    }

    if (control.errors?.['required']) {
      return 'Enter your date of birth';
    }

    if (control.errors?.['invalidDate']) {
      return 'Date of birth must be a real date';
    }

    if (control.errors?.['dateTooEarly']) {
      return `Date of birth must be after ${control.errors['minDate']}`;
    }

    if (control.errors?.['dateTooLate']) {
      return `Date of birth must be before ${control.errors['maxDate']}`;
    }

    if (control.errors?.['day_pattern']) {
      return 'Day must be a number between 1 and 31';
    }

    if (control.errors?.['month_pattern']) {
      return 'Month must be a number between 1 and 12';
    }

    if (control.errors?.['year_pattern']) {
      return 'Year must be a 4-digit number';
    }

    if (control.errors) {
      return 'Enter a valid date of birth';
    }

    return '';
  }

  validateForm(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      alert('Form is valid!');
    } else {
      alert('Form has errors. Please check your inputs.');
    }
  }

  resetForm(): void {
    this.form.reset({
      colour: 'blue',
      choice: 'green',
    });
  }
}
