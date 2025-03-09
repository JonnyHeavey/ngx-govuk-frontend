import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKBackLinkComponent } from 'ngx-govuk-frontend/back-link';
import { GovUKCheckboxComponent } from 'ngx-govuk-frontend/checkbox';
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
}
