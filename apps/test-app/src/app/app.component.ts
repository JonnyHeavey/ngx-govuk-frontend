import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GovUKButtonComponent } from 'ngx-govuk-frontend/button';
import { GovUKCheckboxComponent } from 'ngx-govuk-frontend/checkbox';
import { GovUKPasswordInputComponent } from 'ngx-govuk-frontend/password-input';
import {
  GovUKRadioGroupComponent,
  GovUKRadioOption,
} from 'ngx-govuk-frontend/radio';
import { GovUKTextInputComponent } from 'ngx-govuk-frontend/text-input';
import { GovUKTextareaComponent } from 'ngx-govuk-frontend/textarea';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    GovUKButtonComponent,
    ReactiveFormsModule,
    GovUKTextInputComponent,
    GovUKTextareaComponent,
    GovUKPasswordInputComponent,
    GovUKCheckboxComponent,
    GovUKRadioGroupComponent,
  ],
  selector: 'ngx-govuk-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    title: '',
    description: '',
    price: '',
    password: '',
    rememberMe: false,
    choice: 'B',
  });

  options: GovUKRadioOption[] = [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
  ];

  constructor() {
    this.form.valueChanges.subscribe((changes) => 
      console.log('changes', changes)
    );
  }
}
